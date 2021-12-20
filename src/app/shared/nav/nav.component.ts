import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }
  rem = document.body.clientWidth / 192;
  iconRem = 4.5 * this.rem

  ngOnInit(): void {
  }

}
