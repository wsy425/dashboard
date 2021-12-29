import { Component, OnInit } from '@angular/core';
import { FabricService } from '../../service/fabric.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {

  constructor(public fabricService: FabricService) { }
  rem = document.body.clientWidth / 192;
  hGutter = 2 * this.rem
  vGutter = 3 * this.rem
  index = ['1号传感器', '2号传感器', '3号传感器', '4号传感器']
  function = true
  sources = ["系统数据源1", "系统数据源2", "系统数据源3"]


  switchFunction() {
    this.function = !this.function
  }

  ngOnInit(): void {
  }

}
