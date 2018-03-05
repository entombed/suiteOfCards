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

  cardDecks = {
    robot01:{
      name: 'Роботы - голова',
      status: false,
    },
    robot02:{
      name: 'Роботы - туловище',
      status: false,
    },
    robot03:{
      name: 'Роботы - ноги',
      status: false,
    },
    aboutMe01:{
      name: 'Обо мне - голова',
      status: false,
    },
    aboutMe02:{
      name: 'Обо мне - туловище',
      status: false,
    },
    aboutMe03:{
      name: 'Обо мне - ноги',
      status: false,
    },
    cad01:{
      name: 'Приказание и действие - Зеленая рубашка',
      status: false,
    },
    cad02:{
      name: 'Приказание и действие - Фиолетовая рубашка',
      status: false,
    },
    cad03:{
      name: 'Приказание и действие - Желтая рубашка',
      status: false,
    },
    scenarios:{
      name: 'Сценарий в действии',
      status: false,
    },
    words:{
      name: 'Действия',
      status: false,
    }
  }

  sideBarCardsChoice = false;
  statusTextArea = false;

  showSideBar(status){
    this.sideBarCardsChoice = status;
  }

  showInputTextArea(status){
    this.statusTextArea = status;
  }

  hideSideBar(event){
    this.statusTextArea = event;
  }
}
