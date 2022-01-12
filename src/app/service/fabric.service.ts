import { Injectable } from '@angular/core';
import { fabric } from 'fabric';
import { Object } from 'fabric';
import { SensorInfoService } from './sensor-info.service'

@Injectable({
  providedIn: 'root'
})
export class FabricService {
  canvas: fabric.Canvas;
  private _editMode: boolean;
  target: Object;

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

  constructor(public sensor: SensorInfoService) {
    this.editMode = false
  }

  // canvas初始化
  initialize(source: string, width: number, height: number) {
    this.editMode = false
    // 创建Canvas
    this.canvas = new fabric.Canvas('canvas', {
      selection: false, width, height
    });

    // 添加双击传感器事件
    this.canvas.on('mouse:dblclick', (options) => {
      this.target = options.target
      this.editMode = false
      console.log(this.target)
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

  // 添加传感器按钮
  addCircle(name?: string) {
    const sensor = new fabric.Circle({
      name,
      left: 300,
      top: 300,
      radius: 10,
      strokeWidth: 2,
      fill: 'rgba(20, 255, 0, 0.5)',
      stroke: 'rgba(20, 255, 0, 0.5)',
      scaleX: 0.7,
      scaleY: 0.7
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
    return sensor;
  }


}
