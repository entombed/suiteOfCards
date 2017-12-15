import { Injectable } from '@angular/core';

@Injectable()
export class ActionService {

  constructor() { }

  pushToDeck(currentTarget) {
    currentTarget.classList.remove('moved');
    currentTarget.removeAttribute('style');
  }

  pushToMainArea(target, currentTarget){
    let area = document.querySelector('body');
    let box = target.getBoundingClientRect();
    currentTarget.classList.add('moved');
    currentTarget.style.left = area.clientWidth / 2 - box.width / 2 + 'px';
    currentTarget.style.top = '10vh';
  }

  invertCard(target){
    let cardHiddenStatus = target.classList.contains('img-card-hidden');
    if (cardHiddenStatus) {
      target.classList.remove('img-card-hidden');
    } else {
      target.classList.add('img-card-hidden');
    }
  }
}
