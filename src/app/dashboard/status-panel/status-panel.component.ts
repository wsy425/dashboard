import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-panel',
  templateUrl: './status-panel.component.html',
  styleUrls: ['./status-panel.component.scss']
})
export class StatusPanelComponent implements OnInit {
  @Input() index: string

  constructor() { }
  statusBar = "#84E8F4"
  color = "black"

  ngOnInit(): void {
  }

}
