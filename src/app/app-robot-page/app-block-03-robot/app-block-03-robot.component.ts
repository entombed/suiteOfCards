import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetParentElementService } from '../../services/get-parent-element.service';
import { DragAndDropItemService } from '../../services/drag-and-drop-item.service';
import { ActionService } from '../../services/action.service';

@Component({
  selector: 'app-block-03-robot',
  templateUrl: './app-block-03-robot.component.html',
  styleUrls: ['./app-block-03-robot.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    GetParentElementService,
    DragAndDropItemService,
    ActionService
  ]
})
export class AppBlock03RobotComponent implements OnInit {

  constructor(
    public _getParent: GetParentElementService,
    public _dragAndDrop: DragAndDropItemService,
    public _action: ActionService) { }

  ngOnInit() {
    for (let i = 1; i <= this.cardFootCount; i++) {
      this.arrayFoots.push(i + '.jpg');
    }
  }
  titleBlock: string = 'Ноги';
  cardFootCount: number = 28;
  arrayFoots: any = [];
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
