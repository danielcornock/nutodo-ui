import { Component, Input } from '@angular/core';

import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input()
  public todoItem: ITodo;

  constructor() {}
}
