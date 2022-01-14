import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { hubServerUrl } from 'src/environments/environment';
import { SensorInfoService } from './sensor-info.service'
import { AlgorithmService } from './algorithm.service'
import { fileUrl } from 'src/environments/environment'


interface ParamsList {
  paraName: string;
  chineseName: string;
  time: string;
  unit: string;
  numericalValue: number;
  statusBar: string;
  description: string;
  result: any;
  operation: any;
}

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  connection: HubConnection;
  info: ParamsList;
  Refresh: boolean = true;
  dataTransmitValue: Object = {}


  // 用于输出的信息
  currentSensorData: Object;
  currentListOfData: ParamsList[] = [];
  currentPanelData: Object;
  currentErrorID: Object;
  currentListOfError: ParamsList[]
  currentListOfResult: Array<string>
  currentListOfOperation: Array<string>

  // 用于存储的信息
  sensorData: Object = {};
  ListOfData: Object = {};
  PanelData: Object = {};
  errorID: Object = {};

  // 用于累计显示的信息
  ListOfError: ParamsList[] = [];
  ListOfResult: Array<string> = [];
  ListOfOperation: Array<string> = [];

  // 用于固化的信息
  ERROR: Array<string> = [];



  constructor(private sensor: SensorInfoService, private http: HttpClient, private algorithm: AlgorithmService) {
    this.Refresh = true
    if (JSON.parse(localStorage.getItem('ERROR')) != null) {
      this.ERROR = JSON.parse(localStorage.getItem('ERROR'))
    }
    this.connection = new HubConnectionBuilder()
      .withUrl(`${hubServerUrl}/RawParam`)
      .withAutomaticReconnect()
      .build();
    let timer = setInterval(() => {
      if (this.sensor.sourceList != undefined) {
        for (const source of this.sensor.sourceList) {
          this.dataTransmitValue[source] = false
        }
        this.connect();
        clearInterval(timer)
      }
    }, 1000)
  }

  // 连接signalR与持续监听的数据
  connect() {
    this.connectToSignalRServer();

    for (const source of this.sensor.sourceList) {
      let RawData, dataList: ParamsList[], panelData,
        errorList: ParamsList[], errorIDList: Object, resultList: Array<string>, operationList: Array<string>
      this.connection.on('RawDataCome' + source, (raw_data: string) => {
        // console.log(this.currentPanelData)
        RawData = JSON.parse(raw_data);
        dataList = []
        panelData = {}
        errorList = []
        errorIDList = []
        resultList = []
        operationList = []
        for (const key of Object.keys(RawData)) {
          if (key == "Time" || this.sensor.sensorDict[source][key] == undefined) {
            continue
          } else {
            this.algorithm.dataProcess(
              key, RawData[key], RawData["Time"],
              this.sensor.sensorDict[source], this.sensor.statusList[source]
              , dataList, panelData,
              errorList, errorIDList, resultList, operationList,
              this.ERROR)
          }
        }
        this.sensorData[source] = RawData
        // console.log(this.sensorData)
        this.ListOfData[source] = dataList
        this.PanelData[source] = panelData
        this.errorID[source] = errorIDList
        this.algorithm.judgeAdd(this.ListOfError, errorList, 20)
        this.algorithm.judgeAdd(this.ListOfResult, resultList, 20)
        this.algorithm.judgeAdd(this.ListOfOperation, operationList, 20)
        this.Refresh = true
        if (this.ERROR.length > 200) {
          this.uploadERROR()
        }
      });
    }
  }



  // 注册监听端口
  registerListener(eventName: string, callback: (...args: any[]) => void) {
    this.connection.on(eventName, callback)
  }

  // 关闭监听端口
  unregisterListener(eventName: string) {
    this.connection.off(eventName)
  }

  // 输出数据源选择
  setSource(source) {
    this.currentSensorData = this.sensorData[source]
    this.currentListOfData = this.ListOfData[source]
    this.currentPanelData = this.PanelData[source]
    this.currentErrorID = this.errorID[source]
    this.currentListOfError = this.ListOfError
    this.currentListOfResult = this.ListOfResult
    this.currentListOfOperation = this.ListOfOperation
    this.Refresh = false
  }

  // 定期固化上传error信息
  uploadERROR() {
    let api = fileUrl + '/api/dashboard/json/create';
    this.http.post(api, this.ERROR).subscribe(data => {
      this.ERROR = []
      localStorage.removeItem("ERROR");
    })
  }



  // 连接服务
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
