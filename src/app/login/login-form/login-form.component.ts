import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@abp/ng.core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/service/alert.service'

interface LoginParams {
  username: string;
  password: string;
  rememberMe?: boolean;
  redirectUrl?: string;
}

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})


export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private alert: AlertService) { }
  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  login() {
    let user: LoginParams = {
      username: this.loginForm.value.userName,
      password: this.loginForm.value.password
    }
    // this.alert.MessageAlert('error', "您输入的用户名或密码不正确", 3000)
    this.authService.login(user)
      .toPromise()
      .then(data => {
        console.log(data)
        // this.router.navigateByUrl('/dashboard');
      })
      .catch(() => {
        this.alert.MessageAlert('error', "您输入的用户名或密码不正确", 3000)
      });
  }

  ngOnInit(): void {
  }

}
