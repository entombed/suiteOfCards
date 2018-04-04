import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-menu-resize-area',
  templateUrl: './menu-resize-area.component.html',
  styleUrls: ['./menu-resize-area.component.css']
})
export class MenuResizeAreaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()  inAreaProperties;
  display: boolean = false;
  
  show() {
    this.display = true;
    this.checkSizeArea();
  }

  checkSizeArea(){
    let area;
    area = document.querySelector('.main-area').getBoundingClientRect();
    this.inAreaProperties.height = area.height;
    this.inAreaProperties.width = area.width;
  }

  reset(data){
    switch(data){
      case 'width':
        this.inAreaProperties.width = '';
        break;
      case 'height':
        this.inAreaProperties.height = '';
        break;
    }
  }

  changeWidth(action){
    this.checkSizeArea();
    this.inAreaProperties.width = action == 'add' ? this.inAreaProperties.width + this.inAreaProperties.step + 'px' : this.inAreaProperties.width - this.inAreaProperties.step + 'px';
  }

  changeHeight(action){
    this.checkSizeArea();
    this.inAreaProperties.height = action == 'add' ? this.inAreaProperties.height + this.inAreaProperties.step + 'px' : this.inAreaProperties.height - this.inAreaProperties.step + 'px';
  }
}