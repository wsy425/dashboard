import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataSendingModalComponent } from '../setting/data-sending-modal/data-sending-modal.component'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private http: HttpClient, private modal: NzModalService) { }
  rem = document.body.clientWidth / 192;
  iconRem = 4.5 * this.rem
  time = "XXXX/XX/XX XX:XX:XX"

  // 用户头像按钮功能


  // 设置按钮功能
  // 数据发送设置按钮
  setDataSending() {
    const modal = this.modal.create({
      nzTitle: '控制数据发送',
      nzContent: DataSendingModalComponent,
      nzFooter: [
        {
          label: '关闭',
          onClick: () => modal.destroy()
        }
      ],
      nzWidth: 30 * this.rem
    })
  }

  // 文件按钮功能

  // 算法按钮功能

  ngOnInit(): void {
    setInterval(() => {
      let d = new Date()
      this.time = d.getFullYear() + '/' + d.getMonth() + '/' + d.getDate() + ' ' + d.getHours() + ':' + this.format(d.getMinutes()) + ':' + this.format(d.getSeconds())
    }, 1000)
  }

  // 时间格式化
  format(value: number) {
    if (value < 10) {
      return '0' + value
    } else {
      return value
    }
  }

}
