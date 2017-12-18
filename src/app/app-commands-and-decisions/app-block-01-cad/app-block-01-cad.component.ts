import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetParentElementService } from '../../services/get-parent-element.service';
import { DragAndDropItemService } from '../../services/drag-and-drop-item.service';
import { ActionService } from '../../services/action.service';
import { HideShowCardsService } from '../../services/hide-show-cards.service';

@Component({
  selector: 'app-block-01-cad',
  templateUrl: './app-block-01-cad.component.html',
  styleUrls: ['./app-block-01-cad.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    GetParentElementService,
    ActionService,
    HideShowCardsService
  ]
})
export class AppBlock01CadComponent implements OnInit {

  constructor(
    public _getParent:GetParentElementService,
    public _dgragAndDrop:DragAndDropItemService,
    public _action:ActionService,
    public _invert:HideShowCardsService ) { }

  ngOnInit() {
    for (let i = 1; i <= this.cardGreenCount; i++) {
      this.arrayCards.push(i + '.jpg');
    }
  }

  cardGreenCount: number = 21;
  arrayCards: any = [];
  titleBlock: string = 'Зеленая рубашка';
  currentTarget;
  hiddenMode: boolean = false;

  public dragStart(event, parentSelector){
    let target = event.target;
    this.currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._dgragAndDrop.start(event, this.currentTarget);
  }

  public dragKeep(event){
    this._dgragAndDrop.drag(event, this.currentTarget);
    if (this.currentTarget.classList.contains('moved') == false) {
      this.currentTarget.classList.add('moved');
    }
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

  public onDblclick(event, parentSelector){
    let target = event.target;
    let currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._action.pushToMainArea(target, currentTarget)
  }

  public hideShowImage(selector) {
    this.hiddenMode = !this.hiddenMode;
    let arrayCards = document.querySelectorAll( 'div.'+ selector + ' img.img-card');
    this._invert.hideShow(arrayCards, this.hiddenMode);
  }
}
