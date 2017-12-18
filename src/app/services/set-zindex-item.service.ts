import { Injectable } from '@angular/core';

@Injectable()
export class SetZindexItemService {

  zIndex: number = null;

  constructor() { }

  addIndex(currentTarget) {
    if (this.zIndex != currentTarget.style.zIndex) {
      this.zIndex = this.zIndex + 1;
      currentTarget.style.zIndex = this.zIndex;
    }
  }
}
