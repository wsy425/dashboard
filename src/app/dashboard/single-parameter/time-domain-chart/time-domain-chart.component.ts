import { Component, Input, OnInit } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { hubServerUrl } from 'src/environments/environment';
import { FabricService } from "../../../service/fabric.service"
import { SensorInfoService } from '../../../service/sensor-info.service'


@Component({
  selector: 'app-time-domain-chart',
  templateUrl: './time-domain-chart.component.html',
  styleUrls: ['./time-domain-chart.component.scss']
})
export class TimeDomainChartComponent implements OnInit {
  time: Array<string> = [];
  data: Array<number> = [];
  connection: HubConnection;
  ID: string = '';

  constructor(public fabricService: FabricService, public sensor: SensorInfoService) {
    this.connection = new HubConnectionBuilder()
      .withUrl(`${hubServerUrl}/RawParam`)
      .build();
    this.connectToSignalRServer();
  }
  rem = document.body.clientWidth / 192;
  echartsInstance: any
  chartOption = {
    // 标题内容
    title: {
      text: "时域图",
      left: "center",
      top: 1 * this.rem,
      textStyle: {
        fontSize: 1.5 * this.rem
      },
    },
    tooltip: {
      trigger: 'axis'
    },
    // 横坐标内容
    xAxis: {
      type: 'category',
      data: [],
      name: '时间'
    },
    grid: [
      { left: '9%', width: '80%', height: '75%', top: '15%' }
    ],
    // 纵坐标内容
    yAxis: {
      boundaryGap: [0, '50%'],
      type: 'value',
      name: ''
    },
    //
    series: [
      {
        type: 'line',
        lineStyle: {
          width: 0.3 * this.rem
        },
        smooth: true,
        symbol: 'none',
        stack: 'a',
        data: [],
      }
    ]
  }


  async ngOnInit() {
    if (this.fabricService.target) {
      this.ID = this.fabricService.target.name
    }

    this.connection.on('RawDataCome' + this.sensor.source, (raw_data: string) => {
      this.chartOption.title.text = this.ID + "时域图"
      this.chartOption.yAxis.name = this.sensor.currentSensorDict[this.ID].unit
      if (this.ID != this.fabricService.target.name) {
        this.time = []
        this.data = []
        this.echartsInstance.clear();
        this.ID = this.fabricService.target.name
        this.chartOption.title.text = this.ID + "时域图"
        this.chartOption.yAxis.name = this.sensor.currentSensorDict[this.ID].unit
      }
      this.addData(JSON.parse(raw_data), this.ID, this.time, this.data)
      // this.chartOption.title.text = this.ID + "时域图"
      this.chartOption.series[0].data = this.data
      this.chartOption.xAxis.data = this.time
      if (this.echartsInstance) {
        this.echartsInstance.setOption(this.chartOption, true)
      }
    })
  }

  onChartInit(ec) {
    this.echartsInstance = ec;
  }

  // 数据累加
  addData(raw_data: any, id: string, time: any, data: any) {
    time.push(raw_data.Time.substring(11, 19));
    data.push(raw_data[id]);
    if (data.length >= 35) {
      time.shift();
      data.shift();
    }
  }

  ngOnDestroy() {
    this.connection.off('RawDataCome' + this.sensor.source)
  }

  // 如果连接没有成功，每5s重新连接一次。
  async connectToSignalRServer() {
    try {
      console.log('dasd');
      await this.connection.start();
      console.log('SignalR Connected.');
    } catch (err) {
      console.log(err);
      setTimeout(this.connectToSignalRServer, 5000);
    }
  }

}
