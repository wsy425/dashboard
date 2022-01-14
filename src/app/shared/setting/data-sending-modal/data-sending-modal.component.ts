import { Component, OnInit } from '@angular/core';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { SensorInfoService } from '../../../service/sensor-info.service';
import { SignalRService } from '../../../service/signal-r.service';
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
  loading: Object = {}

  constructor(private http: HttpClient, private nzModalRef: NzModalRef, public sensor: SensorInfoService, private alert: AlertService, public signalR: SignalRService) {
    this.sources = this.sensor.sourceList
  }

  clickSwitch(source) {
    if (!this.loading[source]) {
      this.loading[source] = true;
      let api;
      const data = 'symbol=' + source.slice(1,)
      const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) }
      if (this.signalR.dataTransmitValue[source]) {
        api = transmitUrl + '/stop'
      } else {
        api = transmitUrl + '/start'
      }
      this.http.post(api, data, httpOptions).subscribe((res: resProps) => {
        console.log(res)
        if (res.code == 200) {
          this.signalR.dataTransmitValue[source] = !this.signalR.dataTransmitValue[source]
          this.alert.MessageAlert('success', res.result, 1000)
        } else if (res.code == 400) {
          this.signalR.dataTransmitValue[source] = !this.signalR.dataTransmitValue[source]
          this.alert.MessageAlert('warning', res.result, 1000)
        }
        else {
          this.alert.MessageAlert('error', res.result, 1000)

        }
        this.loading[source] = false;
      })
    }
  }

  ngOnInit(): void {
  }

}
