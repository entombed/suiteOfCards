import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddDelArrayItemService } from '../../services/add-del-array-item.service';
import { GetParentElementService } from '../../services/get-parent-element.service';
import { DragAndDropItemService } from '../../services/drag-and-drop-item.service';

@Component({
  selector: 'app-main-area-robot',
  templateUrl: './app-main-area-robot.component.html',
  styleUrls: ['./app-main-area-robot.component.css'],
  providers: [
    AddDelArrayItemService,
    GetParentElementService,
    DragAndDropItemService
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppMainAreaRobotComponent implements OnInit {

  constructor(
    private _addDel:AddDelArrayItemService,
    public _getParent:GetParentElementService,
    public _dgragAndDrop:DragAndDropItemService ) { }

  ngOnInit() {
  }
  showSidebar = false;
  currentTarget;
  inputArray: string[] = [];

  public addToArray(inputValue: string, arrayName: any[]){
    this._addDel.add(inputValue, arrayName)
  }

  public delFromArray(event, id: number, arrayName){
    if (event.ctrlKey == true) {
      this._addDel.del(id, arrayName);
    }
  }

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
}
