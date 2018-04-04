import { Injectable } from '@angular/core';
import { SetZindexItemService } from './set-zindex-item.service';

@Injectable()
export class ActionService {

  constructor(public _zindex: SetZindexItemService) { }

  pushToDeck(currentTarget) {
    currentTarget.classList.remove('moved');
    currentTarget.removeAttribute('style');
  }

  pushToMainArea(target, currentTarget) {
    let area = <HTMLElement>document.querySelector('body');
    let box = target.getBoundingClientRect();

    let targetProperties = {
      X: box.left + pageXOffset,
      Y: box.top + pageYOffset,
      height: box.height,
      width: box.width
    };

    let areaSize = {
      offsetTop: area.offsetTop,
      height: area.clientHeight + area.offsetTop,
      width: area.clientWidth
    };

    this._zindex.addIndex(currentTarget);

    if (currentTarget.classList.contains('moved') === false) {
      currentTarget.classList.add('moved');
      currentTarget.style.top = targetProperties.Y + 'px';
      box = target.getBoundingClientRect();
      targetProperties.width = box.width;
      currentTarget.style.left = targetProperties.X - (targetProperties.width / 2) / 2 + 'px';
    }

    setTimeout(() => {
      currentTarget.style.left = areaSize.width / 2 - targetProperties.width / 2 + 'px';
      currentTarget.style.top = '10vh';
    }, 180)

  }

  invertCard(target) {
    let cardHiddenStatus = target.classList.contains('img-card-hidden');
    if (cardHiddenStatus) {
      target.classList.remove('img-card-hidden');
    } else {
      target.classList.add('img-card-hidden');
    }
  }
}
