import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FabricService } from '../../service/fabric.service';
import { SensorInfoService } from '../../service/sensor-info.service';
import { SignalRService } from "../../service/signal-r.service"

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
  timef: any

  constructor(public fabricService: FabricService, public sensor: SensorInfoService, public signalR: SignalRService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.fabricService.initialize(this.source, 100 * this.rem, 83 * this.rem);
    }, 0)
    this.timef = setInterval(() => {
      this.fabricService.canvas?.forEachObject(element => {
        if (element.type === 'circle') {
          if (element.fill != '#84E8F4') {
            element.set('fill', '#84E8F4')
            element.set('stroke', '#68B7C1')
          }
          if (this.signalR.currentErrorID) {
            if (element.name in this.signalR.currentErrorID) {
              element.set('fill', this.signalR.currentErrorID[element.name])
              element.set('stroke', this.signalR.currentErrorID[element.name])
            }
          }
        }
      })
      this.fabricService.canvas.renderAll()
    }, 1000)
    // console.log(this.fabricService.canvas)
  }

  ngOnDestroy() {
    clearInterval(this.timef)
  }



}
