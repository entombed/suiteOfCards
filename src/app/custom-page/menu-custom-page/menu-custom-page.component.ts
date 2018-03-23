import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-custom-page',
  templateUrl: './menu-custom-page.component.html',
  styleUrls: ['./menu-custom-page.component.css']
})
export class MenuCustomPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() inCardDecks;

  display: boolean = false;

  show() {
    this.display = true;
  }
}
