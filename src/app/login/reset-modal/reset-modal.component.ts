import { Component, OnInit, Input } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { accountUrl } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from 'src/app/service/alert.service'

interface responseProps {
  statusCode: number
  message: string
}

@Component({
  selector: 'app-reset-modal',
  templateUrl: './reset-modal.component.html',
  styleUrls: ['./reset-modal.component.scss']
})
export class ResetModalComponent implements OnInit {
  // @Input() txt: any;
  constructor(private nzModalRef: NzModalRef, private http: HttpClient, private alert: AlertService) { }

  confirmValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { error: true, required: true };
    } else if (control.value !== this.resetForm.controls.password.value) {
      return { confirm: true, error: true };
    }
    return {};
  };

  resetForm = new FormGroup({
    userName: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,10}$/)]),
    password1: new FormControl(null, [this.confirmValidator]),
  })


  reset() {
    let resetForm = {
      username: this.resetForm.value.userName,
      userEmail: this.resetForm.value.email,
      newPassword: this.resetForm.value.password,
    }
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) }
    let api = accountUrl + '/api/app/reset-password'
    this.http.post(api, resetForm, httpOptions).subscribe((response: responseProps) => {
      if (response.statusCode === 200) {
        this.alert.MessageAlert('success', response.message, 3000)
        this.nzModalRef.destroy(true);
      } else {
        this.alert.MessageAlert('error', response.message, 3000)
      }
    });
  }

  ngOnInit(): void {
  }

}
