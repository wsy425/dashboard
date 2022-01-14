import { Component, OnInit } from '@angular/core';
import { SignalRService } from "../../service/signal-r.service"
import { FabricService } from '../../service/fabric.service';



@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor(public fabricService: FabricService, public signalR: SignalRService) { }

  ngOnInit(): void {
    setInterval(() => {
      this.fabricService.canvas?.forEachObject(element => {
        if (element.name in this.signalR.currentErrorID) {
          element.set('fill', this.signalR.currentErrorID[element.name])
          element.set('stroke', this.signalR.currentErrorID[element.name])
        }
      })
      this.fabricService.canvas.renderAll()
    }, 1000)
  }

}
