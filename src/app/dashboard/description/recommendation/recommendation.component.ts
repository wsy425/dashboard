import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {

  constructor() { }
  listOfData = ["操作建议1操作建议1操作建议1操作建议1操作建议1操作建议1", "操作建议2", "操作建议3"]

  ngOnInit(): void {
  }

}
