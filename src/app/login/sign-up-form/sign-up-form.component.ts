import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { accountUrl } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from 'src/app/service/alert.service'

interface registerProps {
  userName: string
  emailAddress: string
  password: "string",
  appName: "dashboard"
}

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor(private http: HttpClient, private alert: AlertService) { }
  signupForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  signup() {
    let registerForm: registerProps = {
      userName: this.signupForm.value.userName,
      emailAddress: this.signupForm.value.email,
      password: this.signupForm.value.password,
      appName: "dashboard",
    }
    // this.alert.MessageAlert('success', "您已注册成功！", 3000)
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let api = accountUrl + '/api/account/register'
    this.http.post(api, registerForm, httpOptions).subscribe((response) => {
      this.alert.MessageAlert('success', "您已注册成功！", 3000)
    });
  }

  ngOnInit(): void {
  }

}
