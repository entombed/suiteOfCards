import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetParentElementService } from '../../services/get-parent-element.service';
import { DragAndDropItemService } from '../../services/drag-and-drop-item.service';
import { ActionService } from '../../services/action.service';

@Component({
  selector: 'app-block-01-about-me',
  templateUrl: './app-block-01-about-me.component.html',
  styleUrls: ['./app-block-01-about-me.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    GetParentElementService,
    DragAndDropItemService,
    ActionService
  ]
})
export class AppBlock01AboutMeComponent implements OnInit {

  constructor(
    public _getParent: GetParentElementService,
    public _dragAndDrop: DragAndDropItemService,
    public _action: ActionService) { }

  ngOnInit() {
    for (let i = 1; i <= this.cardCount; i++) {
      this.arrayCards.push(i + '.jpg');
    }
  }
  cardCount = 30;
  arrayCards = [];
  titleBlock = 'Голова';
  currentTarget;

  public dragStart(event, parentSelector) {
    let target = event.target;
    this.currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._dragAndDrop.start(event, this.currentTarget);
  }

  public dragKeep(event) {
    this._dragAndDrop.drag(event, this.currentTarget);
  }

  public onClick(event, parentSelector) {
    if (event.ctrlKey == true) {
      let target = event.target;
      let currentTarget = this._getParent.getParentBySelector(target, parentSelector);
      this._action.pushToDeck(currentTarget);
    }
  }

  public onDblclick(event, parentSelector) {
    let target = event.target;
    let currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._action.pushToMainArea(target, currentTarget)
  }
}
