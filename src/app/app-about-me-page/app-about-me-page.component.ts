import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me-page',
  templateUrl: './app-about-me-page.component.html',
  styleUrls: ['./app-about-me-page.component.css']
})
export class AppAboutMePageComponent implements OnInit {

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
