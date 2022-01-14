import { Component, OnInit } from '@angular/core';
import { SignalRService } from "../../../service/signal-r.service"

@Component({
  selector: 'app-diagnostic-results',
  templateUrl: './diagnostic-results.component.html',
  styleUrls: ['./diagnostic-results.component.scss']
})
export class DiagnosticResultsComponent implements OnInit {

  constructor(public signalR: SignalRService) { }
  listOfData = ["诊断结果1诊断结果1诊断结果1诊断结果1诊断结果1诊断结果1", "诊断结果2", "诊断结果3"]

  ngOnInit(): void {
  }

}
