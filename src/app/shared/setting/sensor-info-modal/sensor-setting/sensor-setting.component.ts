import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sensor-setting',
  templateUrl: './sensor-setting.component.html',
  styleUrls: ['./sensor-setting.component.scss']
})
export class SensorSettingComponent implements OnInit {
  @Input() source: string
  @Input() sensorInfo: Object


  constructor() { }
  statusParam: Array<string>;
  AlgorithmSensor: Array<string>;
  highFrequencySensor: Array<string>;
  sensorDict: Object;
  searchActive: number
  sensors: Array<string> = []
  active: Array<Boolean> = []
  Algorithm: Array<Boolean> = []
  highFrequency: Array<Boolean> = []
  editStatus: Array<Boolean> = []

  ngOnInit() {
    this.statusParam = this.sensorInfo["statusParam"]
    this.AlgorithmSensor = this.sensorInfo["Algorithm"]
    this.highFrequencySensor = this.sensorInfo["highFrequency"]
    this.sensorDict = this.sensorInfo["Dict"]
    for (let sensor in this.sensorDict) {
      this.sensors.push(sensor)
      this.active.push(false)
      this.editStatus.push(true)
      if (sensor in this.AlgorithmSensor) {
        this.Algorithm.push(true)
      } else {
        this.Algorithm.push(false)
      }
      if (sensor in this.highFrequencySensor) {
        this.highFrequency.push(true)
      } else {
        this.highFrequency.push(false)
      }
    }
  }

  search() {
    this.active[this.searchActive] = true
  }

  swtichA(i: number) {
    if (!this.editStatus[i]) {
      this.Algorithm[i] = !this.Algorithm[i]
      console.log(this.Algorithm[i])
    }
  }

  swtichF(i: number) {
    if (!this.editStatus[i]) {
      this.highFrequency[i] = !this.highFrequency[i]
      console.log(this.highFrequency[i])
    }
  }

  addWarn(sensor: string) {
    this.sensorDict[sensor]["warn"]["num"] += 1
    this.sensorDict[sensor]['warn']['info'].push("新建报警信息")
    this.sensorDict[sensor]['warn']['result'].push([])
    this.sensorDict[sensor]['warn']['operation'].push([])
  }

  addROO(sensor: string, j: number, type: string) {
    let msg = (type == 'result') ? '诊断结果' : '操作建议'
    this.sensorDict[sensor]['warn'][type][j].push("新建" + msg)
  }


  save() {
    console.log("statusParam")
    console.log(this.statusParam)
    console.log("Algorithm")
    console.log(this.AlgorithmSensor)
    console.log("highFrequency")
    console.log(this.highFrequencySensor)
    console.log("sensorDict")
    console.log(this.sensorDict)
  }

}
