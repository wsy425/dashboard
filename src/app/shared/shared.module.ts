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
import { DataSendingModalComponent } from './setting/data-sending-modal/data-sending-modal.component';

@NgModule({
  declarations: [
    NavComponent,
    DataSendingModalComponent
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
    NzSwitchModule
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
