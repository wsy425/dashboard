import { Injectable } from '@angular/core';
import { fabric } from 'fabric';
import { Object } from 'fabric';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FabricService {
  canvas: fabric.Canvas;
  private _editMode: boolean;
  target: Object;

  get editMode(): boolean {
    return this._editMode;
  }

  set editMode(newEditMode: boolean) {
    this._editMode = newEditMode;
    this.canvas?.forEachObject(element => {
      element.selectable = newEditMode;
    });
    // 防止选中对象的情况下切换到查看模式后被选中对象仍然可以被移动的问题
    this.canvas?.discardActiveObject();
  }

  constructor() {
    this.editMode = false
  }

  // canvas初始化
  initialize(source: string, width: number, height: number) {
    this.editMode = false
    this.canvas = new fabric.Canvas('canvas', {
      selection: false, width, height
    });
  }

  // 设置背景图片
  setBackground(imgSrc: string, width: number, height: number) {
    fabric.Image.fromURL(imgSrc, oImg => {
      oImg.scaleToWidth(width);
      oImg.scaleToHeight(height);
      this.canvas.setBackgroundImage(oImg, this.canvas.renderAll.bind(this.canvas), {
        top: width / 25,
      });
    });
  }


}
