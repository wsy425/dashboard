import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { SensorInfoService } from '../../../service/sensor-info.service';
import { transmitUrl } from 'src/environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertService } from 'src/app/service/alert.service'

interface resProps {
  code: number
  result: string
}

@Component({
  selector: 'app-data-sending-modal',
  templateUrl: './data-sending-modal.component.html',
  styleUrls: ['./data-sending-modal.component.scss']
})
export class DataSendingModalComponent implements OnInit {
  sources: Array<string>
  switchValue: Object = {}
  loading: Object = {}

  constructor(private http: HttpClient, private nzModalRef: NzModalRef, public sensor: SensorInfoService, private alert: AlertService) { }

  clickSwitch(source) {
    if (!this.loading[source]) {
      this.loading[source] = true;
      let api;
      console.log(source.slice(1,))
      const data = {
        symbol: source.slice(1,)
      }
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) }
      if (this.switchValue[source]) {
        api = transmitUrl + '/stop'
      } else {
        api = transmitUrl + '/start'
      }
      console.log(api)
      console.log(data)
      this.http.post(api, data, httpOptions).subscribe((res: resProps) => {
        console.log(res)
        if (res.code == 200) {
          this.switchValue[source] = !this.switchValue[source]
          this.loading[source] = false;
          this.alert.MessageAlert('success', res.result, 1000)
        } else {
          this.alert.MessageAlert('error', res.result, 1000)
          this.loading[source] = false;
        }
      })
    }
  }

  ngOnInit(): void {
    let timer = setInterval(() => {
      if (this.sensor.sourceList != undefined) {
        this.sources = this.sensor.sourceList
        for (const source of this.sources) {
          this.switchValue[source] = false
          this.loading[source] = false
        }
        clearInterval(timer)
      }
    }, 500)
  }

}
