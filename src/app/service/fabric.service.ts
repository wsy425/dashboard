import { Injectable } from '@angular/core';
import { fabric } from 'fabric';
import { Object } from 'fabric';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SensorInfoService } from './sensor-info.service'

@Injectable({
  providedIn: 'root'
})
export class FabricService {
  canvas: fabric.Canvas;
  private _editMode: boolean;
  target: Object;
  function: boolean = true;

  sensorName: Object;
  sensorParam: Object;

  get editMode(): boolean {
    return this._editMode;
  }

  set editMode(newEditMode: boolean) {
    this._editMode = newEditMode;
    this.canvas?.forEachObject(element => {
      element.selectable = newEditMode;
    });
    // 防止选中对象的情况下切换到查看模式后被选中对象仍然可以被移动的问题
    this.canvas?.discardActiveObject();
  }

  constructor(public sensor: SensorInfoService, private http: HttpClient) {
    this.editMode = false
    // 获取之前添加的name信息
    fabric.Circle.prototype.toObject = ((toObject) => {
      return function () {
        return fabric.util.object.extend(toObject.call(this), {
          name: this.name
        });
      };
    })(fabric.Circle.prototype.toObject);
  }

  // canvas初始化
  initialize(source: string, width: number, height: number) {
    this.editMode = false
    // 创建Canvas
    this.canvas = new fabric.Canvas(source, {
      selection: false, width, height
    });
    // console.log(this.canvas)
    // 初始化Canvas内容
    this.readCanvas(source)

    // TODO:Canvas内容大小自适应

    // 添加双击传感器事件
    this.canvas.on('mouse:dblclick', (options) => {
      if (options.target?.type === 'circle') {
        this.saveCanvas()
        this.selectSensor(options.target)
        this.editMode = false
        this.function = false
      }
    });

    // 鼠标滑动触发传感器名字
    this.canvas.on('mouse:over', (options) => {
      if (options.target?.type === 'circle') {
        const sensorParam = new fabric.Text(options.target.name, {
          left: options.target.left - 20,
          top: options.target.top - 37,
          fontSize: 15,
          backgroundColor: '#EBEBEB',
        });
        const sensorName = new fabric.Text(this.sensor.currentSensorDict[options.target.name].chineseName + '传感器', {
          left: options.target.left - 20,
          top: options.target.top - 20,
          fontSize: 15,
          backgroundColor: '#EBEBEB',
        });
        this.canvas.add(sensorParam)
        this.canvas.add(sensorName)
        this.sensorParam = sensorParam
        this.sensorName = sensorName
      }
    });
    this.canvas.on('mouse:out', (options) => {
      if (options.target?.type === 'circle') {
        this.canvas.remove(this.sensorName)
        this.canvas.remove(this.sensorParam)
      }
    });
  }

  // 设置背景图片
  setBackground(imgSrc: string, width: number, height: number) {
    fabric.Image.fromURL(imgSrc, oImg => {
      oImg.scaleToWidth(width);
      oImg.scaleToHeight(height);
      this.canvas.setBackgroundImage(oImg, this.canvas.renderAll.bind(this.canvas), {
        top: width / 25,
      });
    });
  }

  // 增加传感器
  addSensor(name?: string) {
    const sensor = new fabric.Circle({
      name,
      left: 300,
      top: 300,
      radius: 10,
      strokeWidth: 2,
      fill: '#84E8F4',
      stroke: '#68B7C1',
      scaleX: 0.8,
      scaleY: 0.8
    });

    sensor.toObject = ((toObject) => {
      return function () {
        return fabric.util.object.extend(toObject.call(this), {
          name
        });
      };
    })(sensor.toObject);
    this.canvas.selection = true;
    this.canvas.add(sensor);
    this.selectSensor(sensor)
    return sensor;
  }

  // 删除传感器
  deleteSensor() {
    this.canvas.remove(this.target)
  }

  // 修改传感器信息
  modifySensor(name: string) {
    if (this.target) {
      this.target.name = name
    }
  }

  // 查询传感器
  inquireSensor(name: string) {
    let status
    this.canvas.forEachObject(element => {
      if (element.name == name) {
        this.selectSensor(element)
        status = true
      }
    })
    return status
  }

  // 读取canvas
  readCanvas(source) {
    // 远端读取
    // TODO:日后要换成后端读取
    if (localStorage.getItem(source) == null) {
      this.http.get('assets/' + source + '.json').subscribe(response => {
        this.canvas.loadFromJSON(
          response,
          this.canvas.renderAll.bind(this.canvas),
          (json, object) => {
            object.selectable = !this._editMode;
          },
        );
      })
      this.canvas.renderAll()
    } else {
      // 浏览器读取
      this.canvas.loadFromJSON(
        localStorage.getItem(source),
        this.canvas.renderAll.bind(this.canvas),
        (json, object) => {
          object.selectable = !this._editMode;
        }
      )
      // console.log(this.canvas)
      this.canvas.renderAll()
    }
  }

  // 选中传感器逻辑
  selectSensor(element) {
    this.target?.set('scaleX', 0.8)
    this.target?.set('scaleY', 0.8)
    this.target = element
    this.target.set('scaleX', 1)
    this.target.set('scaleY', 1)
    this.canvas.renderAll()
  }

  // 保存canvas信息
  saveCanvas() {
    this.canvas.remove(this.sensorName)
    this.canvas.remove(this.sensorParam)
    this.target?.set('scaleX', 0.8)
    this.target?.set('scaleY', 0.8)
    this.canvas.renderAll()
    localStorage.setItem(this.sensor.source, JSON.stringify(this.canvas));
  }


}
