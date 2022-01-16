import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OAuthService } from 'angular-oauth2-oidc';
import { AuthService } from '@abp/ng.core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service'
import { NzModalService } from 'ng-zorro-antd/modal';
import { ResetModalComponent } from '../reset-modal/reset-modal.component'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { accountUrl } from 'src/environments/environment'
import { ConfigStateService } from '@abp/ng.core';


interface LoginParams {
  username: string;
  password: string;
  rememberMe?: boolean;
  redirectUrl?: string;
}

interface responseProps {
  result: number
}


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})


export class LoginFormComponent implements OnInit {
  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(private http: HttpClient, private oAuthService: OAuthService, private authService: AuthService, private router: Router, private alert: AlertService, private modal: NzModalService) { }
  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/)]),
  })
  rem = document.body.clientWidth / 192;

  login() {
    let user: LoginParams = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password,
      rememberMe: true
    }
    this.authService.login(user)
      .toPromise()
      .then(data => {
        // console.log(data)
        this.alert.MessageAlert('success', "恭喜您登录成功！", 1000)
        setTimeout(() => {
          this.router.navigateByUrl('/dashboard');
        }, 1000)
      })
      .catch(() => {
        this.alert.MessageAlert('error', "您输入的用户名或密码不正确！", 3000)
      });
  }

  resetModal() {
    const modal = this.modal.create({
      nzTitle: '找回密码',
      nzContent: ResetModalComponent,
      // nzComponentParams: { // 给modal的参数，注意modal里需要@Input此字段
      //   txt: '新增数据的内容区哈',
      // },
      nzFooter: [
        {
          label: '取消',
          onClick: () => modal.destroy()
        },
        {
          label: '确认',
          type: 'primary',
          loading: false,
          onClick(component): void {
            this.loading = true;// 让提交按钮显示加载动画，防止重复提交
            setTimeout(() => {
              this.loading = false
            }, 3000)
            component.reset();
          }
        },
      ],
      nzWidth: 40 * this.rem
    });
    modal.afterClose.subscribe((result: Boolean) => {
      console.log('simpleModal-afterClose-res: ', result);
      if (result) {
        // 在此写本页面的业务，例如更新表格的数据
        // this.getData()
      }
    })
  }

  ngOnInit(): void {
  }

}
