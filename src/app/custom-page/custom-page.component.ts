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

    robotDeck: {
      status: false,
      name: 'Роботы',
    },
    aboutMeDeck: {
      status: false,
      name: 'Обо мне',
    },
    cadDeck: {
      status: false,
      name: 'Приказания и решения',
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

  statusCardsChoice = false;
  statusTextArea = false;

  showCardsChoice(status){
    this.statusCardsChoice = status;
  }

  showInputTextArea(status){
    this.statusTextArea = status;
  }

  hideTextArea(event){
    this.statusTextArea = event;
  }
}
