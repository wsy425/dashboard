import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagnostic-results',
  templateUrl: './diagnostic-results.component.html',
  styleUrls: ['./diagnostic-results.component.scss']
})
export class DiagnosticResultsComponent implements OnInit {

  constructor() { }
  listOfData = ["诊断结果1诊断结果1诊断结果1诊断结果1诊断结果1诊断结果1", "诊断结果2", "诊断结果3"]

  ngOnInit(): void {
  }

}
