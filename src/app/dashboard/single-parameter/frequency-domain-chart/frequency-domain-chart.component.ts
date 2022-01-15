import { Component, Input, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { hubServerUrl } from 'src/environments/environment';
import { FabricService } from "../../../service/fabric.service"
import { SensorInfoService } from '../../../service/sensor-info.service'

@Component({
  selector: 'app-frequency-domain-chart',
  templateUrl: './frequency-domain-chart.component.html',
  styleUrls: ['./frequency-domain-chart.component.scss']
})
export class FrequencyDomainChartComponent implements OnInit {
  ID: string = '';

  constructor(public fabricService: FabricService, public sensor: SensorInfoService) { }

  ngOnInit(): void {
    if (this.fabricService.target) {
      this.ID = this.fabricService.target.name
    }
  }

}
