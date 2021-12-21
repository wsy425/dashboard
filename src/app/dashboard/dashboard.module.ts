import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { StatusPanelComponent } from './status-panel/status-panel.component';
import { StatisticsComponent } from './statistics/statistics.component'
import { DescriptionComponent } from './description/description.component';
import { AbnormalParametersComponent } from './description/abnormal-parameters/abnormal-parameters.component';
import { DiagnosticResultsComponent } from './description/diagnostic-results/diagnostic-results.component';
import { RecommendationComponent } from './description/recommendation/recommendation.component';

import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NgxEchartsModule } from 'ngx-echarts';





@NgModule({
  declarations: [
    DashboardLayoutComponent,
    StatusPanelComponent,
    StatisticsComponent,
    DescriptionComponent,
    AbnormalParametersComponent,
    DiagnosticResultsComponent,
    RecommendationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzGridModule,
    SharedModule,
    NzTabsModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
  ]
})
export class DashboardModule { }
