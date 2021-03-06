import { Injectable } from '@angular/core';
import { GetParentElementService } from './get-parent-element.service'

@Injectable()
export class HideShowCardsService {

  constructor(public _getParent: GetParentElementService) { }

  hideShow(arrayCards, status, parentSelector) {
    for (let i = 0; i < arrayCards.length; i++) {
      let parent = this._getParent.getParentBySelector(arrayCards[i], parentSelector)
      if (parent.classList.contains('moved')) {
        continue;
      } else {
        arrayCards[i].classList.toggle('img-card-hidden', status);
      }
    }
  }
}
