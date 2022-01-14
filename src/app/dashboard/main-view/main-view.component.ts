import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FabricService } from '../../service/fabric.service';
import { SensorInfoService } from '../../service/sensor-info.service';


@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  @Input() source: string
  @ViewChild("divWidth")
  divWidth: ElementRef
  rem = document.body.clientWidth / 192;

  constructor(public fabricService: FabricService, public sensor: SensorInfoService) { }

  ngOnInit(): void {
    let timer = setInterval(() => {
      if (this.sensor.sourceList != undefined) {
        this.fabricService.initialize(this.source, 100 * this.rem, 83 * this.rem);
        clearInterval(timer)
      }
    }, 1000)
    // console.log(this.fabricService.canvas)
  }

}
