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


  constructor(private http: HttpClient) {
    // TODO:后续改成后端
    this.http.get('assets/SensorInfo.json').subscribe(response => {
      this.sourceList = response["source"]
      if (this.sensorDict[this.sourceList[0]] == undefined) {
        for (const source of this.sourceList) {
          this.sensorDict[source] = response[source]["Dict"]
          this.statusList[source] = response[source]["statusParam"]
          this.algorithmList[source] = response[source]["Algorithm"]
          this.highFrequencyList[source] = response[source]["highFrequency"]
        }
      }
    })
  }

  setSource(source) {
    this.source = source
    this.currentSensorDict = this.sensorDict[source]
    this.currentStatusList = this.statusList[source]
    this.currentAlgorithmList = this.algorithmList[source]
    this.currentHighFrequencyList = this.highFrequencyList[source]
  }
}
