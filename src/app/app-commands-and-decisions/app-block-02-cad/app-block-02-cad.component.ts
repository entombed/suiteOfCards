import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetParentElementService } from '../../services/get-parent-element.service';
import { DragAndDropItemService } from '../../services/drag-and-drop-item.service';
import { ActionService } from '../../services/action.service';
import { HideShowCardsService } from '../../services/hide-show-cards.service';
import { ShuffleService } from '../../services/shuffle.service';

@Component({
  selector: 'app-block-02-cad',
  templateUrl: './app-block-02-cad.component.html',
  styleUrls: ['./app-block-02-cad.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    GetParentElementService,
    ActionService,
    DragAndDropItemService,
    HideShowCardsService,
    ShuffleService
  ]
})
export class AppBlock02CadComponent implements OnInit {

  constructor(
    public _getParent: GetParentElementService,
    public _dragAndDrop: DragAndDropItemService,
    public _action: ActionService,
    public _invert: HideShowCardsService,
    public _shuffle: ShuffleService) { }

  ngOnInit() {
    let tmpArray = [];
    for (let i = 1; i <= this.cardCount; i++) {
      tmpArray.push(i + '.jpg');
    }
    this.arrayCards = this._shuffle.mixIt(tmpArray);
  }

  cardCount: number = 26;
  arrayCards: any = [];
  titleBlock: string = 'Фиолетовая рубашка';
  currentTarget;
  hiddenMode: boolean = false;

  public dragStart(event, parentSelector) {
    let target = event.target;
    this.currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._dragAndDrop.start(event, this.currentTarget);
  }

  public dragKeep(event) {
    this._dragAndDrop.drag(event, this.currentTarget);
  }

  public onClick(event, parentSelector) {
    let target = event.target;
    if (event.ctrlKey == true) {
      let currentTarget = this._getParent.getParentBySelector(target, parentSelector);
      this._action.pushToDeck(currentTarget);
    }
    else if (event.altKey == true) {
      this._action.invertCard(target);
    }
  }

  public onDblclick(event, parentSelector) {
    let target = event.target;
    let currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._action.pushToMainArea(target, currentTarget)
  }

  public hideShowImage(selector, parentSelector) {
    this.hiddenMode = !this.hiddenMode;
    let arrayCards = document.querySelectorAll('div.' + selector + ' img.img-card');
    this._invert.hideShow(arrayCards, this.hiddenMode, parentSelector);
  }

  public resortDeck(array){
    this.arrayCards = this._shuffle.mixIt(array);
  }
}
