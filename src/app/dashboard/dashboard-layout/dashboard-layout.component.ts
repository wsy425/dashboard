import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  constructor() { }
  rem = document.body.clientWidth / 192;
  hGutter = 2 * this.rem
  vGutter = 3 * this.rem
  index = ['1号传感器', '2号传感器', '3号传感器', '4号传感器']


  ngOnInit(): void {
  }

}
