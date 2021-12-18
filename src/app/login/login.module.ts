import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';
import { LoginRoutingModule } from './login-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  declarations: [
    LoginlayoutComponent,
    LoginFormComponent,
    SignUpFormComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    LoginRoutingModule,
    NzFormModule,
    ReactiveFormsModule,
    NzMessageModule,
    NzInputModule,

  ]
})
export class LoginModule { }
