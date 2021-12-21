import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abnormal-parameters',
  templateUrl: './abnormal-parameters.component.html',
  styleUrls: ['./abnormal-parameters.component.scss']
})
export class AbnormalParametersComponent implements OnInit {

  constructor() { }
  listOfData = [
    { statusBar: "#FC5B5D", description: "错误信息1错误信息1错误信息1错误信息1错误信息1错误信息1错误信息1" },
    { statusBar: "#FCBE30", description: "错误信息2" },
    { statusBar: "#FC5B5D", description: "错误信息3" },
  ]

  ngOnInit(): void {
  }

}
