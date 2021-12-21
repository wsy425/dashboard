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
  time = "XXXX/XX/XX XX:XX:XX"

  ngOnInit(): void {
    setInterval(() => {
      let d = new Date()
      this.time = d.getFullYear() + '/' + d.getMonth() + '/' + d.getDate() + ' ' + d.getHours() + ':' + this.format(d.getMinutes()) + ':' + this.format(d.getSeconds())
    }, 1000)
  }

  format(value: number) {
    if (value < 10) {
      return '0' + value
    } else {
      return value
    }
  }

}
