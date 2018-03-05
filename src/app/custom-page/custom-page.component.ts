import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-page',
  templateUrl: './custom-page.component.html',
  styleUrls: ['./custom-page.component.css']
})
export class CustomPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  buttons = {
    robot01:{
      name: 'Robot 01',
      status: false,
    },
    robot02:{
      name: 'Robot 02',
      status: false,
    },
    robot03:{
      name: 'Robot 03',
      status: false,
    },
    aboutMe01:{
      name: 'aboutMe01',
      status: false,
    },
    aboutMe02:{
      name: 'aboutMe01',
      status: false,
    },
    aboutMe03:{
      name: 'aboutMe01',
      status: false,
    },
    cad01:{
      name: 'cad01',
      status: false,
    },
    cad02:{
      name: 'cad01',
      status: false,
    },
    cad03:{
      name: 'cad01',
      status: false,
    },
    scenarios:{
      name: 'scenarios',
      status: false,
    },
    words:{
      name: 'words',
      status: false,
    }
  }

  sideBarCardsChoice = false;

  showSideBar(){
    this.sideBarCardsChoice = !this.sideBarCardsChoice;
  }
}
