import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-parameter',
  templateUrl: './single-parameter.component.html',
  styleUrls: ['./single-parameter.component.scss']
})
export class SingleParameterComponent implements OnInit {

  constructor() { }
  paraID = "QQGG001"
  editMode = false
  sensorID = "QQGG001"

  // 编辑/查看按钮功能
  switch() {
    this.editMode = !this.editMode
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
    this.editMode = !this.editMode
    this.deliver()
  }

  ngOnInit(): void {
  }

  deliver() {
    this.sensorID = this.paraID
  }

}
