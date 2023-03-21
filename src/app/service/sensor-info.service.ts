import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorInfoService {
  // 用于输出的信息
  currentSensorDict: Object;
  currentStatusList: Array<string>;
  currentAlgorithmList: Array<string>;
  currentHighFrequencyList: Array<string>;
  source: string;

  // 用于存储的信息
  sourceList: Array<string>;
  sensorDict: Object = {};
  statusList: Object = {};
  algorithmList: Object = {};
  highFrequencyList: Object = {};
  sensorInfo: Object


  constructor(private http: HttpClient) {
    if (localStorage.getItem("SensorInfo") == null) {
      // TODO:后续改成后端
      this.reset()
    } else {
      let info = JSON.parse(localStorage.getItem("SensorInfo"))
      this.sensorInfo = info
      this.sourceList = this.sensorInfo["source"]
      this.getInfo()
    }

  }

  // 将信息配置到service存储
  getInfo() {
    for (const source of this.sourceList) {
      this.sensorDict[source] = this.sensorInfo[source]["Dict"]
      this.statusList[source] = this.sensorInfo[source]["statusParam"]
      this.algorithmList[source] = this.sensorInfo[source]["Algorithm"]
      this.highFrequencyList[source] = this.sensorInfo[source]["highFrequency"]

    }
  }

  // 确定当前输出的信息源
  setSource(source) {
    this.source = source
    this.currentSensorDict = this.sensorDict[source]
    this.currentStatusList = this.statusList[source]
    this.currentAlgorithmList = this.algorithmList[source]
    this.currentHighFrequencyList = this.highFrequencyList[source]
  }

  // 更新传感器信息
  refesh(info) {
    this.sensorInfo = info
    this.sourceList = info["source"]
    this.getInfo()
    localStorage.setItem("SensorInfo", JSON.stringify(info));
  }

  // 重置传感器信息
  reset() {
    this.http.get('assets/SensorInfo.json').subscribe(response => {
      this.sensorInfo = response
      this.sourceList = this.sensorInfo["source"]
      if (this.sensorDict[this.sourceList[0]] == undefined) {
        this.getInfo()
      }
    })
  }

}
