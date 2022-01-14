import { Injectable } from '@angular/core';
import { SensorInfoService } from './sensor-info.service'

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
export class AlgorithmService {
  info: ParamsList;

  constructor(public sensor: SensorInfoService) {
  }

  // 数据总处理
  dataProcess(key, value: number, time: string,
    SensorDict: Object, statusList: Array<string>,
    dataList: ParamsList[], panelData: Object,
    errorList: ParamsList[], errorIDList: Object, resultList: Array<string>, operationList: Array<string>,
    ERROR: Array<string>) {
    let Status = this.judgeStatus(value, key, SensorDict)
    this.info = {
      paraName: SensorDict[key].characterName,
      chineseName: SensorDict[key].chineseName,
      unit: SensorDict[key].unit,
      time: time,
      numericalValue: value,
      statusBar: Status[0],
      description: Status[1],
      result: Status[2],
      operation: Status[3]
    };
    dataList.push(this.info)
    // 左上角监控面板信息
    if (statusList.includes(key)) {
      panelData[key] = this.info
    }
    // 报警信息
    if (this.info.statusBar != '#84E8F4') {
      errorList.push(this.info)
      errorIDList[key] = this.info.statusBar
      resultList = this.judgeAdd(resultList, this.info.result, 20)
      operationList = this.judgeAdd(operationList, this.info.operation, 20)
      ERROR.push(time + ',' + this.info.description + ',' + this.info.chineseName + "," + this.info.paraName + "," + this.info.numericalValue + ',' + this.info.unit)
      localStorage.setItem('ERROR', JSON.stringify(ERROR))
    }


  }

  // 单个传感器阈值判断算法
  judgeStatus(value: number, ID: string, SensorDict: Object) {
    for (var i = 0; i < SensorDict[ID].warn.num; i++) {
      switch (SensorDict[ID].warn.limitType[i]) {
        case 'high':
          if (value > SensorDict[ID].warn.limitValue[i]) {
            return [SensorDict[ID].warn.statusColor[i], SensorDict[ID].warn.info[i], SensorDict[ID].warn.result[i], SensorDict[ID].warn.operation[i]]
          }
          break;
        case 'low':
          if (value < SensorDict[ID].warn.limitValue[i]) {
            return [SensorDict[ID].warn.statusColor[i], SensorDict[ID].warn.info[i], SensorDict[ID].warn.result[i], SensorDict[ID].warn.operation[i]]
          }
          break;
        case 'equal':
          if (value == SensorDict[ID].warn.limitValue[i]) {
            return [SensorDict[ID].warn.statusColor[i], SensorDict[ID].warn.info[i], SensorDict[ID].warn.result[i], SensorDict[ID].warn.operation[i]]
          }
          break;
      }
    }
    return ['#84E8F4', '', '', '']
  }

  // 诊断结果、决策去重，累计显示
  judgeAdd(showList: any, addList: any, num: number) {
    for (let i = 0; i < addList.length; i++) {
      if (!showList.includes(addList[i])) {
        showList.push(addList[i])
      }
      if (showList.length > num) {
        showList.shift()
      }
    }
    return showList
  }

  // 累计信息显示
  // cumulativeDisplay(showList, info, num) {
  //   showList = this.judgeAdd(showList, info)
  //   if (showList.length > num) {
  //     showList = showList.slice(showList.length - num, showList.length)
  //     console.log(showList.length)
  //   }
  // }

}
