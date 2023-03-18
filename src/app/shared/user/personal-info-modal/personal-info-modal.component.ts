import { Component, OnInit } from '@angular/core';
import { ConfigStateService, AuthService } from '@abp/ng.core';
import { NzUploadFile } from 'ng-zorro-antd/upload';


@Component({
  selector: 'app-personal-info-modal',
  templateUrl: './personal-info-modal.component.html',
  styleUrls: ['./personal-info-modal.component.scss']
})
export class PersonalInfoModalComponent implements OnInit {

  constructor(private authService: AuthService, private configStateService: ConfigStateService,) { }
  rem = document.body.clientWidth / 192;
  iconRem = 10 * this.rem
  gap = 10 * this.rem
  User: string
  imgScr: string
  email: string
  file: NzUploadFile

  ngOnInit() {
    this.email = this.configStateService.getOne("currentUser").email
    this.User = this.configStateService.getOne("currentUser").userName
    // console.log(this.configStateService.getOne("currentUser"))
  }

  beforeUpload = (file: NzUploadFile): boolean => {
    this.file = file;
    return false;
  };

  upload() {
    console.log(this.imgScr)
    console.log('User' + this.User)
    console.log('email' + this.email)
    console.log(this.file)
    return false
    // console.log('email'+this.email)
  }

}
