import { Injectable } from '@angular/core';

@Injectable()
export class HideShowCardsService {

  constructor() { }

  hideShow(arrayCards, status) {
    for (let i = 0; i < arrayCards.length; i++) {
      if (arrayCards[i].parentElement.classList.contains('moved')) {
        continue;
      } else {
        if (status) {
          arrayCards[i].classList.add('img-card-hidden');
        } else {
          arrayCards[i].classList.remove('img-card-hidden');
        }
      }
    }
  }
}
