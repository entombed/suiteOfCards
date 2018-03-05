import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenarios-page',
  templateUrl: './app-scenarios-page.component.html',
  styleUrls: ['./app-scenarios-page.component.css']
})
export class AppScenariosPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  statusTextArea = false;
  
  showInputTextArea(status){
    this.statusTextArea = status;
  }

  hideSideBar(event){
    this.statusTextArea = event;
  }
}
