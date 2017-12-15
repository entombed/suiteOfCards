import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetParentElementService } from '../../services/get-parent-element.service';
import { DragAndDropItemService } from '../../services/drag-and-drop-item.service';
import { ActionService } from '../../services/action.service';

@Component({
  selector: 'app-block-02-robot',
  templateUrl: './app-block-02-robot.component.html',
  styleUrls: ['./app-block-02-robot.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    GetParentElementService,
    DragAndDropItemService,
    ActionService
  ]
})
export class AppBlock02RobotComponent implements OnInit {

  constructor(
    public _getParent:GetParentElementService,
    public _dgragAndDrop:DragAndDropItemService,
    public _action:ActionService ) { }

  ngOnInit() {
    for (let i = 1; i <= this.cardBodyCount; i++) {
      this.arrayBodys.push(i + '.jpg');
    }
  }
  titleBody: string = 'Туловище';
  arrayBodys: any = [];
  cardBodyCount: number = 22;
  currentTarget;
  
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
    if (event.ctrlKey == true) {
      let target = event.target;
      let currentTarget = this._getParent.getParentBySelector(target, parentSelector);
      this._action.pushToDeck(currentTarget);
    }
  }

  public onDblclick(event, parentSelector){
    let target = event.target;
    let currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._action.pushToMainArea(target, currentTarget)
  }
}
