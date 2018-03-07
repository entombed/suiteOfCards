import { Injectable } from '@angular/core';

@Injectable()
export class GetParentElementService {

  constructor() { }

  currentTarget;

  getParentBySelector(child, selector) {
    var node = child;
    while (node && !node.classList.contains(selector)) {
      node = node.parentElement;
    }
    this.currentTarget = node;
    return node;
  }
}
