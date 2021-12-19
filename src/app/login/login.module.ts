import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { LoginRoutingModule } from './login-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { ResetModalComponent } from './reset-modal/reset-modal.component';

@NgModule({
  declarations: [
    LoginlayoutComponent,
    LoginFormComponent,
    SignUpFormComponent,
    ResetModalComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    NzFormModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzModalModule,

  ]
})
export class LoginModule { }
