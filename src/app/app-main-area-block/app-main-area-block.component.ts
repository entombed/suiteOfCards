import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { AddDelArrayItemService } from '../services/add-del-array-item.service';
import { GetParentElementService } from '../services/get-parent-element.service';
import { DragAndDropItemService } from '../services/drag-and-drop-item.service';
import { ActionService } from '../services/action.service';
import { MenuResizeAreaComponent } from '../menu-resize-area/menu-resize-area.component';

@Component({
  selector: 'app-main-area-block',
  templateUrl: './app-main-area-block.component.html',
  styleUrls: ['./app-main-area-block.component.css'],
  providers: [
    AddDelArrayItemService,
    GetParentElementService,
    DragAndDropItemService,
    ActionService
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppMainAreaBlockComponent implements OnInit {

  constructor(
    private _addDel: AddDelArrayItemService,
    public _getParent: GetParentElementService,
    public _dragAndDrop: DragAndDropItemService,
    public _action: ActionService) { }

  ngOnInit() {
    
  }

  @ViewChild('inputRef') inputField: ElementRef;
  @ViewChild(MenuResizeAreaComponent) private menuResizeComponent: MenuResizeAreaComponent;

  currentTarget;
  display: boolean = false;
  inputArray: string[] = [];
  inputText: string = '';
  buttonText = 'Добавить';
  locked: boolean = false;
  areaProperties = {
    height: '',
    width: '',
    step: 200
  }

  public addToArray() {
    let inputText = this.inputField.nativeElement.value;
    this._addDel.add(inputText, this.inputArray)
    this.inputText = '';
    this.focus();
  }

  public delFromArray(event, id: number) {
    if (event.ctrlKey == true) {
      this._addDel.del(id, this.inputArray);
    }
  }

  public dragStart(event, parentSelector) {
    this.locked = true;
    let target = event.target;
    this.currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._dragAndDrop.start(event, this.currentTarget);
  }

  public dragKeep(event) {
    this._dragAndDrop.drag(event, this.currentTarget);
  }

  public onDblclick(event, parentSelector) {
    let target = event.target;
    let currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._action.pushToMainArea(target, currentTarget)
  }

  focus(){
    this.inputField.nativeElement.focus();
  }

  show(){
    this.display = true;
  }

  showResizeMenu(){
    this.menuResizeComponent.show();
  }
}
