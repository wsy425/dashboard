import { Component, OnInit, Input } from '@angular/core';
import { SensorInfoService } from '../../service/sensor-info.service';
import { SignalRService } from "../../service/signal-r.service"


@Component({
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.scss']
})
export class StatusPanelComponent implements OnInit {
  _index: string;
  @Input()
  set index(index: string) {
    this._index = index
    this.chineseName = this.sensor.currentSensorDict[index]?.chineseName ?? ''
    this.unit = this.sensor.currentSensorDict[index]?.unit ?? ''
  }

  constructor(public sensor: SensorInfoService, public signalR: SignalRService) { }
  statusBar = "#84E8F4"
  color = "black"
  unit = "单位"
  chineseName = ""

  ngOnInit(): void {
  }


}
