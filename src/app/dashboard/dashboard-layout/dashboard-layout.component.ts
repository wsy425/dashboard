import { Component, OnInit } from '@angular/core';
import { FabricService } from '../../service/fabric.service';
import { SensorInfoService } from '../../service/sensor-info.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  sources: Array<string>

  constructor(public fabricService: FabricService, public sensor: SensorInfoService) { }
  rem = document.body.clientWidth / 192;
  hGutter = 2 * this.rem
  vGutter = 3 * this.rem
  index = ['1号传感器', '2号传感器', '3号传感器', '4号传感器']
  function = true


  switchFunction() {
    this.function = !this.function
  }

  switchSource(source) {
    console.log(source)
  }

  ngOnInit(): void {
    // TODO:这里后续要优化成可观察对象的形式
    let timer = setInterval(() => {
      if (this.sensor.sourceList != undefined) {
        this.sources = this.sensor.sourceList
        this.sensor.setSource(this.sources[0])
        clearInterval(timer)
      }
    }, 1000)
  }

}
