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

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(): void {
    this.tabs.push('new');
    console.log(this.tabs)
  }

  ngOnInit() {
    this.http.get('assets/SensorInfo.json').subscribe(response => {
      this.sensorInfo = response
      this.tabs = response["source"]
    })
  }

}
