import { rendererTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FabricService } from '../../service/fabric.service';

@Component({
  selector: 'app-single-parameter',
  templateUrl: './single-parameter.component.html',
  styleUrls: ['./single-parameter.component.scss']
})
export class SingleParameterComponent implements OnInit {
  rem = document.body.clientWidth / 192;

  constructor(public fabricService: FabricService) { }
  paraID = "QQGG001"
  sensorID = "QQGG001"

  // 编辑/查看按钮功能
  switch() {
    this.fabricService.editMode = !this.fabricService.editMode
  }

  // 创建按钮功能
  createSensor() {
    this.deliver()
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
