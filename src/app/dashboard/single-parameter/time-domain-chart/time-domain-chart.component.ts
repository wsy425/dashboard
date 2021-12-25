import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-domain-chart',
  templateUrl: './time-domain-chart.component.html',
  styleUrls: ['./time-domain-chart.component.scss']
})
export class TimeDomainChartComponent implements OnInit {
  @Input() sensorID: string

  constructor() { }

  ngOnInit(): void {
  }

}
