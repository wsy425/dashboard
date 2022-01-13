import { Component, OnInit } from '@angular/core';
import { NzTableFilterFn, NzTableFilterList, NzTableSortFn, NzTableSortOrder } from 'ng-zorro-antd/table';
import { SignalRService } from "../../service/signal-r.service"


interface DataItem {
  statusBar: string,
  chineseName: string
  numericalValue: number,
  unit: string
}

interface ColumnItem {
  name: string;
  sortOrder: NzTableSortOrder | null;
  sortFn: NzTableSortFn<DataItem> | null;
}

@Component({
  selector: 'app-overall-parameters',
  templateUrl: './overall-parameters.component.html',
  styleUrls: ['./overall-parameters.component.scss']
})
export class OverallParametersComponent implements OnInit {

  constructor(public signalR: SignalRService) {
  }




  listOfColumns: ColumnItem[] = [
    {
      name: "状态",
      sortOrder: 'dscend',
      sortFn: (a: DataItem, b: DataItem) => a.statusBar.localeCompare(b.statusBar),
    },
    {
      name: "名称",
      sortOrder: null,
      sortFn: null,
    },
    {
      name: "数值",
      sortOrder: null,
      sortFn: null,
    },
    {
      name: "单位",
      sortOrder: null,
      sortFn: null,
    },
  ]
  ngOnInit(): void {
  }

  listOfData = [
    {
      statusBar: "#84E8F4",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 11.33,
      unit: "mm"
    },
    {
      statusBar: "#84E8F4",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 11.33,
      unit: "mm"
    },
    {
      statusBar: "#84E8F4",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 11.33,
      unit: "mm"
    },
    {
      statusBar: "#FC5B5D",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 1122.33,
      unit: "rpm"
    },
    {
      statusBar: "#FCBE30",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 112.33,
      unit: "rpm"
    },
    {
      statusBar: "#84E8F4",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 11.33,
      unit: "mm"
    },
    {
      statusBar: "#FC5B5D",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 1122.33,
      unit: "rpm"
    },
    {
      statusBar: "#FC5B5D",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 1122.33,
      unit: "rpm"
    },
    {
      statusBar: "#FC5B5D",
      chineseName: "奇奇怪怪中文名奇奇怪怪中文名",
      numericalValue: 1122.33,
      unit: "rpm"
    },
    {
      statusBar: "#FC5B5D",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 1122.33,
      unit: "rpm"
    },
    {
      statusBar: "#FC5B5D",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 1122.335,
      unit: "rpm"
    },
    {
      statusBar: "#FC5B5D",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 1122.33,
      unit: "rpm"
    },
    {
      statusBar: "#FC5B5D",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 1122.33,
      unit: "rpm"
    },
    {
      statusBar: "#FC5B5D",
      chineseName: "奇奇怪怪中文名",
      numericalValue: 1122.33,
      unit: "rpm"
    },
  ];
}
