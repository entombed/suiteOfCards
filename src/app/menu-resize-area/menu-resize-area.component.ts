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

  @Input() inAreaProperties;
  display: boolean = false;
  // bodyArea;

  show() {
    this.display = true;
    // this.checkSizeArea();
  }

  checkSizeArea() {
    let mainArea;
    // this.bodyArea = document.querySelector('body')
    mainArea = document.querySelector('.main-area').getBoundingClientRect();
    this.inAreaProperties.height = mainArea.height;
    this.inAreaProperties.width = mainArea.width;
  }

  reset(data) {
    switch (data) {
      case 'width':
        this.inAreaProperties.width = '';
        // this.bodyArea.style.width = '';
        break;
      case 'height':
        this.inAreaProperties.height = '';
        break;
    }
  }

  changeWidth(action) {
    this.checkSizeArea();
    // this.bodyArea.style.width = action == 'add' ? this.bodyArea.clientWidth + this.inAreaProperties.step + 'px' : this.bodyArea.clientWidth - this.inAreaProperties.step + 'px';
    this.inAreaProperties.width = action == 'increase' ? this.inAreaProperties.width + this.inAreaProperties.step + 'px' : this.inAreaProperties.width - this.inAreaProperties.step + 'px';
  }

  changeHeight(action) {
    this.checkSizeArea();
    this.inAreaProperties.height = action == 'increase' ? this.inAreaProperties.height + this.inAreaProperties.step + 'px' : this.inAreaProperties.height - this.inAreaProperties.step + 'px';
  }
}
