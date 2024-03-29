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
import { OverallParametersComponent } from './overall-parameters/overall-parameters.component';
import { SingleParameterComponent } from './single-parameter/single-parameter.component';


import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NgxEchartsModule } from 'ngx-echarts';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { TimeDomainChartComponent } from './single-parameter/time-domain-chart/time-domain-chart.component';
import { FrequencyDomainChartComponent } from './single-parameter/frequency-domain-chart/frequency-domain-chart.component';
import { MainViewComponent } from './main-view/main-view.component';
import { BackgroundModalComponent } from './single-parameter/background-modal/background-modal.component';






@NgModule({
  declarations: [
    DashboardLayoutComponent,
    StatusPanelComponent,
    StatisticsComponent,
    DescriptionComponent,
    AbnormalParametersComponent,
    DiagnosticResultsComponent,
    RecommendationComponent,
    OverallParametersComponent,
    SingleParameterComponent,
    TimeDomainChartComponent,
    FrequencyDomainChartComponent,
    MainViewComponent,
    BackgroundModalComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NzGridModule,
    SharedModule,
    NzTabsModule,
    NzButtonModule,
    NzRadioModule,
    NzImageModule,
    NzUploadModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    NzTableModule,
  ]
})
export class DashboardModule { }
