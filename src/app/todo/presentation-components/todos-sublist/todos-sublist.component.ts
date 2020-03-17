import { Component, Input } from '@angular/core';

import { ITodo } from '../../interfaces/todo.interface';

@Component({
  selector: 'app-todos-sublist',
  templateUrl: './todos-sublist.component.html',
  styleUrls: ['./todos-sublist.component.scss']
})
export class TodosSublistComponent {
  @Input()
  public todosSublist: Array<ITodo>;

  constructor() {}
}
