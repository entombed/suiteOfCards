import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GetParentElementService } from '../services/get-parent-element.service';
import { DragAndDropItemService } from '../services/drag-and-drop-item.service';
import { ActionService } from '../services/action.service';

@Component({
  selector: 'app-words-block',
  templateUrl: './app-words-block.component.html',
  styleUrls: ['./app-words-block.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
  providers: [
    GetParentElementService,
    DragAndDropItemService,
    ActionService
  ]
})
export class AppWordsBlockComponent implements OnInit {

  constructor(
    public _getParent: GetParentElementService,
    public _dragAndDrop: DragAndDropItemService,
    public _action: ActionService) { }

  ngOnInit() {
    let word: string;
    for (let i = 0; i < this.arrayWords.length; i++) {
      let firstLetter: string = this.arrayWords[i][0];
      if (firstLetter !== firstLetter.toUpperCase()) {
        word = firstLetter.toUpperCase() + this.arrayWords[i].slice(1);
        this.arrayWords[i] = word;
      }
    }
    this.arrayWords = this.arrayWords.sort();
  }

  arrayWords = [
    'Соответствовать', 'Стыдить (ся)', 'Избегать', 'Затягивать', 'Обесценивать', 'Жалеть', 'Сомневаться', 'Запрещать', 'Бояться', 'Тревожиться', 'Смиряться', 'Выбирать (делать выбор)', 'Улучшать/совершенствовать', 'Жаловаться', 'Бездействовать', 'Пытаться', 'Подражать/копировать', 'Ограничивать', 'Ухаживать', 'Прятать/скрывать', 'Паниковать', 'Проверять', 'Обвинять', 'Отказывать (ся)', 'Общаться', 'Лениться', 'Наказывать', 'Мечтать', 'Обижать (ся)', 'Ошибаться', 'Ненавидеть', 'Радовать (ся)', 'Терять', 'Надеяться', 'Обманывать (ся)', 'Освобождать (ся)', 'Терпеть', 'Настаивать/требовать', 'Молчать', 'Прояснять (вносить ясность)', 'Обещать', 'Менять (ся)', 'Подчинять (ся)', 'Соревноваться', 'Работать', 'Решать (принимать решение)', 'Баловать', 'Расти/развиваться', 'Рассчитывать/взвешивать', 'Угрожать', 'Уставать', 'Умирать', 'Учить (ся)', 'Преследовать', 'Стесняться', 'Разочаровывать (ся)', 'Хотеть', 'Планировать', 'Ревновать', 'Чувствовать', 'Управлять', 'Удивлять (ся)', 'Учитывать', 'Притворяться', 'Хвалить', 'Шантажировать/ставить условия', 'Сравнивать', 'Удовлетворять', 'Фантазировать/придумывать', 'Прощать', 'Плакать', 'Преувеличивать', 'Предвосхищать', 'Провоцировать', 'Раздражать (ся)', 'Разрешать', 'Развлекать (ся)', 'Намекать', 'Помогать', 'Мстить', 'Отделять (ся)', 'Спешить', 'Уважать', 'Нуждаться', 'Заботиться', 'Любить', 'Говорить', 'Организовывать (ся)', 'Инвестировать/вкладывать', 'Страдать', 'Игнорировать', 'Критиковать/осуждать', 'Контрактировать (заключать договор)', 'Зависеть', 'Клясться', 'Идеализировать', 'Болеть', 'Бороться', 'Заявлять/выражать', 'Бить/убивать/разрушать', 'Гневаться', 'Возмущаться', 'Делать/действовать', 'Грустить/печалиться', 'Кричать', 'Дистанцироваться/отдаляться', 'Скучать', 'Казаться (показалось, кажется)', 'Доказывать', 'Манипулировать', 'Советовать (ся)', 'Творить/создавать', 'Думать', 'Воспитывать', 'Доверять', 'Спасать', 'Контролировать', 'Копить', 'Стараться', 'Жить', 'Ждать', 'Заставлять', 'Завидовать', 'Жертвовать', 'Дарить', 'Защищать (ся)', 'Восхищать (ся)', 'Богатеть', 'Анализировать', 'Просить'
  ];

  titleWord: string = 'Действия';
  currentTarget;

  public dragStart(event, parentSelector) {
    let target = event.target;
    this.currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._dragAndDrop.start(event, this.currentTarget);
  }

  public dragKeep(event) {
    this._dragAndDrop.drag(event, this.currentTarget);
    if (this.currentTarget.classList.contains('moved') == false) {
      this.currentTarget.classList.add('moved');
    }
  }

  public onClick(event, parentSelector) {
    if (event.ctrlKey == true) {
      let target = event.target;
      let currentTarget = this._getParent.getParentBySelector(target, parentSelector);
      this._action.pushToDeck(currentTarget);
    }
  }

  public onDblclick(event, parentSelector) {
    let target = event.target;
    let currentTarget = this._getParent.getParentBySelector(target, parentSelector);
    this._action.pushToMainArea(target, currentTarget)
  }
}
