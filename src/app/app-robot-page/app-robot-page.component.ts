import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-robot-page',
  templateUrl: './app-robot-page.component.html',
  styleUrls: ['./app-robot-page.component.css']
})
export class AppRobotPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  statusTextArea = false;

  showInputTextArea(status) {
    this.statusTextArea = status;
  }

  hideSideBar(event) {
    this.statusTextArea = event;
  }
}
