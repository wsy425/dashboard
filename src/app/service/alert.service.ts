import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private message: NzMessageService, private notification: NzNotificationService) { }

  MessageAlert(type: string, message: string, duration: number): void {
    this.message.create(type, `${message}`, { nzDuration: duration });
  }

  NotificationAlert(type: string, title: string, message: string, location: any, duration: number) {
    this.notification.create(type, `${title}`, `${message}`, { nzPlacement: location, nzDuration: duration })
  }
}
