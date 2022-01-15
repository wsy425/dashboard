import { Component, OnInit } from '@angular/core';
import { FabricService } from '../../service/fabric.service';
import { SensorInfoService } from '../../service/sensor-info.service';
import { SignalRService } from '../../service/signal-r.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  sources: Array<string>
  index: Array<string> = ["", "", "", ""]

  constructor(public fabricService: FabricService, public sensor: SensorInfoService, public signalR: SignalRService) { }
  rem = document.body.clientWidth / 192;
  hGutter = 2 * this.rem
  vGutter = 3 * this.rem


  switchFunction() {
    this.fabricService.function = !this.fabricService.function
  }

  switchSource(source) {
    // this.fabricService.saveCanvas()
    this.sensor.setSource(source)
    this.index = this.sensor.currentStatusList
    this.signalR.setSource(source)
    this.fabricService.function = true
  }

  ngDoCheck() {
    if (this.signalR.Refresh) {
      this.signalR.setSource(this.sensor.source)
    }
  }

  ngOnInit(): void {
    // TODO:这里后续要优化成可观察对象的形式
    let timer = setInterval(() => {
      if (this.sensor.sourceList != undefined) {
        this.sources = this.sensor.sourceList
        this.sensor.setSource(this.sources[0])
        this.signalR.setSource(this.sources[0])
        this.index = this.sensor.currentStatusList
        clearInterval(timer)
      }
    }, 1000)
  }

}
