import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { accountUrl } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from 'src/app/service/alert.service'

interface registerProps {
  username: string
  password: string
  email: "string",
}

interface responseProps {
  statusCode: number
  message: string
}

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {

  constructor(private http: HttpClient, private alert: AlertService) { }

  signupForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/)]),
  })

  signup() {
    let registerForm: registerProps = {
      username: this.signupForm.value.userName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
    }
    // this.alert.MessageAlert('success', "您已注册成功！", 3000)
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let api = accountUrl + '/api/app/register'
    this.http.post(api, registerForm, httpOptions).subscribe((response: responseProps) => {
      if (response.statusCode === 200) {
        this.alert.MessageAlert('success', response.message, 3000)
      } else {
        this.alert.MessageAlert('error', response.message, 3000)
      }
    });
  }

  ngOnInit(): void {
  }

}
