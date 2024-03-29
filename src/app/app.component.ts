import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import { myDefault } from './shared/echarts-theme';

@Component({
  selector: 'app-root',
  template: `
    <abp-loader-bar></abp-loader-bar>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {

  ngOnInit(): void {

    echarts.registerTheme("Default", myDefault);
  }
}
