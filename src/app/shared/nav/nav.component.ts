import { Component, OnInit } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { fileUrl } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SensorInfoService } from '../../service/sensor-info.service';
import { DataSendingModalComponent } from '../setting/data-sending-modal/data-sending-modal.component'
import { SensorInfoModalComponent } from '../setting/sensor-info-modal/sensor-info-modal.component'
import { PersonalInfoModalComponent } from '../user/personal-info-modal/personal-info-modal.component'
import { AlertService } from 'src/app/service/alert.service'
import { AuthService } from '@abp/ng.core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { ConfigStateService } from '@abp/ng.core';


interface resProps {
  code: number
  result: string
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private authService: AuthService, private configStateService: ConfigStateService, private router: Router,
    private http: HttpClient, private modal: NzModalService,
    public sensor: SensorInfoService, private alert: AlertService) { }
  rem = document.body.clientWidth / 192;
  iconRem = 4.5 * this.rem
  time = "XXXX/XX/XX XX:XX:XX"
  User = "User"
  imgScr: string

  // 用户头像按钮功能

  // 个人信息设置
  personalInfoManagement() {
    const modal = this.modal.create({
      nzTitle: '个人信息设置',
      nzContent: PersonalInfoModalComponent,
      nzFooter: [
        {
          label: '关闭',
          onClick: () => modal.destroy()
        },
        {
          label: '保存修改',
          onClick(component): void {
            this.loading = true;// 让提交按钮显示加载动画，防止重复提交
            this.loading = component.upload();
          }
        }
      ],
      nzWidth: 50 * this.rem
    })
  }
  // 系统权限管理按钮
  authorityManagement() {
    this.router.navigateByUrl('/identity');
  }
  // 账号注销功能
  logout() {
    this.authService.logout().subscribe(data => {
      this.alert.MessageAlert('success', "您已成功注销账号", 1000)
      this.router.navigateByUrl('/login');
    })
  }


  // 设置按钮功能

  // 传感器阈值设置按钮
  setSensorInfo() {
    const modal = this.modal.create({
      nzTitle: '传感器信息设置',
      nzContent: SensorInfoModalComponent,
      nzFooter: [
        {
          label: '新增数据源',
          onClick(component): void {
            this.loading = true;// 让提交按钮显示加载动画，防止重复提交
            component.newTab();
            this.loading = false
          }
        },
        {
          label: '关闭',
          onClick: () => modal.destroy()
        }
      ],
      nzWidth: 143 * this.rem
    })
  }

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
  // 历史故障信息下载按钮
  downloadFaultData() {
    window.location.href = fileUrl + '/api/dashboard/json/download'
  }

  // 算法按钮功能

  ngOnInit() {
    this.User = this.configStateService.getOne("currentUser").userName
    setInterval(() => {
      let d = new Date()
      this.time = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + this.format(d.getMinutes()) + ':' + this.format(d.getSeconds())
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
