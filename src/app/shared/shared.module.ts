import { CoreModule } from '@abp/ng.core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { ThemeSharedModule } from '@abp/ng.theme.shared';
import { NgxValidateCoreModule } from '@ngx-validate/core';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NavComponent } from './nav/nav.component';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { DataSendingModalComponent } from './setting/data-sending-modal/data-sending-modal.component';
import { PersonalInfoModalComponent } from './user/personal-info-modal/personal-info-modal.component';
import { SensorInfoModalComponent } from './setting/sensor-info-modal/sensor-info-modal.component';
import { SensorSettingComponent } from './setting/sensor-info-modal/sensor-setting/sensor-setting.component';

@NgModule({
  declarations: [
    NavComponent,
    DataSendingModalComponent,
    PersonalInfoModalComponent,
    SensorInfoModalComponent,
    SensorSettingComponent,
  ],
  imports: [
    CoreModule,
    ThemeSharedModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    NzGridModule,
    NzAvatarModule,
    NzDropDownModule,
    NzIconModule,
    NzDividerModule,
    NzSwitchModule,
    NzTypographyModule,
    NzUploadModule,
    NzTabsModule,
    NzSelectModule,
    NzCollapseModule,
    NzInputModule,
    NzDescriptionsModule,
    NzTagModule,
    NzButtonModule
  ],
  exports: [
    CoreModule,
    ThemeSharedModule,
    NgbDropdownModule,
    NgxValidateCoreModule,
    NavComponent,
  ],
  providers: []
})
export class SharedModule { }
