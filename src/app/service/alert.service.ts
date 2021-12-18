import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private message: NzMessageService) { }

  MessageAlert(type: string, message: string, duration: number): void {
    this.message.create(type, `${message}`, { nzDuration: duration });
  }
}
