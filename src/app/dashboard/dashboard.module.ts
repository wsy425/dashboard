import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { StatusPanelComponent } from './status-panel/status-panel.component';
import { StatisticsComponent } from './statistics/statistics.component';



@NgModule({
  declarations: [
    DashboardLayoutComponent,
    StatusPanelComponent,
    StatisticsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzGridModule,
    SharedModule,
    NzTabsModule,
  ]
})
export class DashboardModule { }
