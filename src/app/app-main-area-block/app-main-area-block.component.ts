import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AddDelArrayItemService } from '../services/add-del-array-item.service';
import { GetParentElementService } from '../services/get-parent-element.service';
import { DragAndDropItemService } from '../services/drag-and-drop-item.service';

@Component({
  selector: 'app-main-area-block',
  templateUrl: './app-main-area-block.component.html',
  styleUrls: ['./app-main-area-block.component.css'],
  providers: [
    AddDelArrayItemService,
    GetParentElementService,
    DragAndDropItemService
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppMainAreaBlockComponent implements OnInit {

  constructor(
    private _addDel:AddDelArrayItemService,
    public _getParent:GetParentElementService,
    public _dragAndDrop:DragAndDropItemService ) { }

  ngOnInit() {
  }
  
  showSidebar = false;
  currentTarget;
  inputArray: string[] = [];
  inputText: string = '';
  buttonText = 'Добавить';

  public addToArray(inputValue: HTMLInputElement, arrayName: any[]){
    this._addDel.add(inputValue, arrayName)
    this.inputText = '';
  }

  public delFromArray(event, id: number, arrayName: any[]){
    if (event.ctrlKey == true) {
      this._addDel.del(id, arrayName);
    }
  }

  public dragStart(event, parentSelector){
    let target = event.target;
    this.currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._dragAndDrop.start(event, this.currentTarget);
  }

  public dragKeep(event){
    this._dragAndDrop.drag(event, this.currentTarget);
    if (this.currentTarget.classList.contains('moved') == false) {
      this.currentTarget.classList.add('moved');
    }
  }
}
