import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SensorInfoService } from '../../../../service/sensor-info.service';

@Component({
  selector: 'app-sensor-setting',
  templateUrl: './sensor-setting.component.html',
  styleUrls: ['./sensor-setting.component.scss']
})
export class SensorSettingComponent implements OnInit {
  @Input() source: string
  @Input() sensorInfo: Object
  @Output() newSensorInfoEvent = new EventEmitter<Object>();


  constructor(public sensor: SensorInfoService) { }
  statusParam: Array<string>;
  AlgorithmSensor: Array<string>;
  highFrequencySensor: Array<string>;
  sensorDict: Object;
  searchActive: number
  sensors: Array<string>
  active: Array<Boolean>
  Algorithm: Array<Boolean>
  highFrequency: Array<Boolean>
  editStatus: Array<Boolean>
  loading: Boolean = true;

  ngOnInit() {
    this.getInfo()
  }

  search() {
    this.active[this.searchActive] = true
  }

  addSensor() {
    this.loading = true
    let sensor = this.sensorInfo["reserve"].shift()
    Object.defineProperty(this.sensorDict, sensor, {
      value: {
        chineseName: "",
        characterName: sensor,
        unit: "",
        warn: {
          num: 0,
          info: [
          ],
          limitType: [
          ],
          limitValue: [
          ],
          statusColor: [
          ],
          result: [
          ],
          operation: [
          ]
        }
      },
      enumerable: true,
      writable: true,
      configurable: true
    });
    this.sensors = [], this.active = [], this.Algorithm = [], this.highFrequency = [], this.editStatus = []
    for (let sensor in this.sensorDict) {
      console.log(this.sensorDict)
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
    console.log(this.sensors)
    this.loading = false
  }

  reset() {
    this.loading = true;
    this.sensor.reset()
    this.sensorInfo = this.sensor.sensorInfo[this.source]
    this.getInfo()
  }

  save() {
    // console.log(this.sensorInfo)
    let info = {
      source: this.source,
      sensorInfo: this.sensorInfo
    }
    this.newSensorInfoEvent.emit(info)
  }

  addWarn(sensor: string) {
    this.sensorDict[sensor]["warn"]["num"] += 1
    this.sensorDict[sensor]['warn']['info'].push("新建报警信息")
    this.sensorDict[sensor]['warn']['result'].push([])
    this.sensorDict[sensor]['warn']['operation'].push([])
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


  addROO(sensor: string, j: number, type: string) {
    let msg = (type == 'result') ? '诊断结果' : '操作建议'
    this.sensorDict[sensor]['warn'][type][j].push("新建" + msg)
  }


  // 获取整理信息
  getInfo() {
    this.statusParam = this.sensorInfo["statusParam"]
    this.AlgorithmSensor = this.sensorInfo["Algorithm"]
    this.highFrequencySensor = this.sensorInfo["highFrequency"]
    this.sensorDict = this.sensorInfo["Dict"]
    this.sensors = [], this.active = [], this.Algorithm = [], this.highFrequency = [], this.editStatus = []
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
    this.loading = false;
  }

}
