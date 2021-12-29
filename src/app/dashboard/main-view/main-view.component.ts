import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { FabricService } from '../../service/fabric.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.scss']
})
export class MainViewComponent implements OnInit {
  @Input() source: string
  @ViewChild("divWidth")
  divWidth: ElementRef
  rem = document.body.clientWidth / 192;

  constructor(private fabricService: FabricService) { }

  ngOnInit(): void {
    this.fabricService.initialize(this.source, 100 * this.rem, 83 * this.rem);
  }

}
