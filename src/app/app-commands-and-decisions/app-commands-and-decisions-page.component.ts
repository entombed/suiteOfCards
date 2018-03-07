import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commands-and-decisions-page',
  templateUrl: './app-commands-and-decisions-page.component.html',
  styleUrls: ['./app-commands-and-decisions-page.component.css']
})
export class AppCommandsAndDecisionsPageComponent implements OnInit {

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
