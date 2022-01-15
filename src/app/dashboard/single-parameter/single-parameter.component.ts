import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FabricService } from '../../service/fabric.service';
import { SensorInfoService } from '../../service/sensor-info.service'
import { AlertService } from '../../service/alert.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { fileUrl } from 'src/environments/environment'

interface resProps {
  code: number
  info: string
}

@Component({
  selector: 'app-single-parameter',
  templateUrl: './single-parameter.component.html',
  styleUrls: ['./single-parameter.component.scss']
})
export class SingleParameterComponent implements OnInit {
  rem = document.body.clientWidth / 192;
  chineseName: string = '';
  paraID: string = '';
  sensorID: string = '';
  hidden: string = 'hidden'

  constructor(private http: HttpClient, public fabricService: FabricService, public sensor: SensorInfoService, private alert: AlertService) { }

  ngAfterContentChecked() {
    if (this.fabricService.target && this.paraID !== this.fabricService.target.name && this.fabricService.editMode == false) {
      this.paraID = this.fabricService.target.name
      this.chineseName = this.sensor.currentSensorDict[this.paraID].chineseName
    }
  }

  // 编辑/查看按钮功能
  switch() {
    this.fabricService.editMode = !this.fabricService.editMode
  }

  // 创建按钮功能
  createSensor() {
    if (this.sensor.currentSensorDict[this.paraID] && !this.fabricService.inquireSensor(this.paraID)) {
      this.fabricService.addSensor(this.paraID)
      this.chineseName = this.sensor.currentSensorDict[this.paraID].chineseName
      this.deliver()
      this.alert.MessageAlert('success', "传感器创建成功", 1000)
    } else if (this.sensor.currentSensorDict[this.paraID]) {
      this.alert.MessageAlert('warning', "您输入的传感器已存在", 1000)
    }
    else {
      this.alert.MessageAlert('error', "您输入的传感器型号不存在", 1000)
    }
  }

  // 查询按钮功能
  inquireSensor() {
    if (this.sensor.currentSensorDict[this.paraID]) {
      // console.log(this.fabricService.inquireSensor(this.paraID))
      if (this.fabricService.inquireSensor(this.paraID)) {
        this.chineseName = this.sensor.currentSensorDict[this.paraID].chineseName
        this.deliver()
        this.alert.MessageAlert('success', "查询到对应传感器", 1000)
      } else {
        this.alert.MessageAlert('warning', "未查询到对应传感器", 1000)
      }
    } else {
      this.alert.MessageAlert('error', "您输入的传感器型号不存在", 1000)
    }
  }

  // 删除按钮功能
  deleteSensor() {
    this.paraID = null
    this.chineseName = null
    this.fabricService.deleteSensor()
    this.deliver()
    this.alert.MessageAlert('success', "传感器删除成功", 1000)
  }

  // 保存按钮功能
  saveSensor() {
    this.fabricService.modifySensor(this.paraID)
    this.fabricService.editMode = !this.fabricService.editMode
    this.fabricService.saveCanvas()
    this.deliver()
    this.alert.MessageAlert('success', "传感器位置信息保存成功", 1000)
  }

  // 设置系统主视图按钮功能
  imageSetting() {
    this.fabricService.setBackground('assets/back.jpeg', 100 * this.rem, 75 * this.rem)
    this.alert.MessageAlert('success', "系统主视图设置成功", 1000)
  }

  // 保存页面配置至服务器按钮
  uploadSensorLocation() {
    this.fabricService.saveCanvas()
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let api = fileUrl + '/api/dashboard/json/config/update'
    let data = {
      configName: this.sensor.source,
      content: JSON.stringify(this.fabricService.canvas)
    }
    console.log(data)
    this.http.put(api, data, httpOptions).subscribe((res: resProps) => {
      if (res.code == 200) {
        this.alert.MessageAlert('success', "页面配置上传成功", 1000)
      } else {
        this.alert.MessageAlert('error', res.info, 1000)
      }
    })
  }


  ngOnInit(): void {
  }

  deliver() {
    this.sensorID = this.paraID
  }

}
