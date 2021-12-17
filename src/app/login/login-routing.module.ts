import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginlayoutComponent } from './loginlayout/loginlayout.component';

const routes: Routes = [{ path: '', component: LoginlayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule { }
