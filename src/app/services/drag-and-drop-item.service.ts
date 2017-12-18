import { Injectable } from '@angular/core';
import { SetZindexItemService } from './set-zindex-item.service';

@Injectable()
export class DragAndDropItemService {

  constructor( public _zindex: SetZindexItemService ) { }
  areaSize = {
    height: null,
    width: null
  };

  mousePos = {
    X: null,
    Y: null
  };

  targetProperties = {
    X: null,
    Y: null,
    height: null,
    width: null
  };

  currentObjPosX: number = null;
  currentObjPosY: number = null;

  start(event, currentTarget) {
    let area = document.querySelector('body');
    let box = event.target.getBoundingClientRect();

    this.targetProperties = {
      X: box.left + pageXOffset,
      Y: box.top + pageYOffset,
      height: box.height,
      width: box.width
    };

    this.areaSize = {
      height: area.clientHeight,
      width: area.clientWidth
    };

    this.mousePos = {
      X: event.clientX,
      Y: event.clientY
    };

    this._zindex.addIndex(currentTarget);
  }

  drag(event, target) {
    this.getCurrentPosition(event);
    this.setStylePositionAttribyte(target);
  }

  setStylePositionAttribyte(target) {
    if (this.currentObjPosY >= 0 && this.currentObjPosY <= this.areaSize.height - this.targetProperties.height && this.currentObjPosX >= 0 && this.currentObjPosX <= this.areaSize.width - this.targetProperties.width) {
      target.style.left = this.currentObjPosX + 'px';
      target.style.top = this.currentObjPosY + 'px';
    }
  }

  getCurrentPosition(event) {
    let offsetX = this.mousePos.X - event.clientX;
    let offsetY = this.mousePos.Y - event.clientY;
    this.currentObjPosX = this.targetProperties.X - offsetX;
    this.currentObjPosY = this.targetProperties.Y - offsetY;
  }
}
