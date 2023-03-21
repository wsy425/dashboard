import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SensorInfoService } from 'src/app/service/sensor-info.service'

@Component({
  selector: 'app-sensor-info-modal',
  templateUrl: './sensor-info-modal.component.html',
  styleUrls: ['./sensor-info-modal.component.scss']
})

export class SensorInfoModalComponent implements OnInit {
  constructor(private sensor: SensorInfoService, private http: HttpClient) { }
  sensorInfo: Object = {};
  tabs: Array<string>;
  loading: boolean = true


  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(): void {
    this.tabs.push('new');
    console.log(this.tabs)
  }

  refreshSensorInfo(info: Object) {
    let source = info["source"]
    this.sensorInfo[source] = info["sensorInfo"]
    this.sensorInfo["source"] = this.tabs
    this.sensor.refesh(this.sensorInfo)
  }

  uploadSensorInfo() {
    // TODO:上传更新数据至后端
    return false
  }

  ngOnInit() {
    this.http.get('assets/SensorInfo.json').subscribe(response => {
      this.sensorInfo = response
      this.tabs = response["source"]
      this.loading = false
    })
    // console.log(this.loading)
    // this.loading = false
  }

}
