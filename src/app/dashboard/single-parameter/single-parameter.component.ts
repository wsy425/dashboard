import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FabricService } from '../../service/fabric.service';
import { SensorInfoService } from '../../service/sensor-info.service'
import { AlertService } from '../../service/alert.service'

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

  constructor(public fabricService: FabricService, public sensor: SensorInfoService, private alert: AlertService) { }

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
    if (this.sensor.currentSensorDict[this.paraID]) {
      this.fabricService.addCircle(this.paraID)
      this.chineseName = this.sensor.currentSensorDict[this.paraID].chineseName
      this.deliver()
      this.alert.MessageAlert('success', "传感器创建成功", 1000)
    } else {
      this.alert.MessageAlert('error', "您输入的传感器型号不存在", 1000)
    }
  }

  // 查询按钮功能
  inquireSensor() {
    this.deliver()
  }

  // 删除按钮功能
  deleteSensor() {
    this.paraID = null
    this.deliver()
  }

  // 保存按钮功能
  saveSensor() {
    this.fabricService.editMode = !this.fabricService.editMode
    this.deliver()
  }

  // 设置系统主视图按钮功能
  imageSetting() {
    this.fabricService.setBackground('assets/back.jpg', 100 * this.rem, 75 * this.rem)
  }


  ngOnInit(): void {
  }

  deliver() {
    this.sensorID = this.paraID
  }

}
