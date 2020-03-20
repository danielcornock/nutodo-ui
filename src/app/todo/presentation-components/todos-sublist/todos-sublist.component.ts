import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHttpModel } from '@danielc7150/ng-api';

import { TODO_CATEGORY_ARRAY } from '../../constants/todo-category.constant';

@Component({
  selector: 'app-todos-sublist',
  templateUrl: './todos-sublist.component.html',
  styleUrls: ['./todos-sublist.component.scss']
})
export class TodosSublistComponent {
  @Input()
  public todosSublist: Array<IHttpModel>;

  @Output()
  public todosSublistOnRefresh: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  public async moveTodo(index: number, direction: string): Promise<void> {
    const newIndex: number = this._getNewIndex(index, direction);

    if (newIndex < 0) return;

    if (newIndex >= TODO_CATEGORY_ARRAY.length) return;

    this.todosSublist[index].data.category = TODO_CATEGORY_ARRAY[newIndex];
    await this.todosSublist[index].update();
    this.todosSublistOnRefresh.emit();
  }

  private _getNewIndex(index: number, direction: string): number {
    const categoryIndex: number = this._getCategoryIndex(
      this.todosSublist[index]
    );

    return direction === 'left' ? categoryIndex - 1 : categoryIndex + 1;
  }

  private _getCategoryIndex(todo: IHttpModel): number {
    switch (todo.data.category) {
      case 'week':
        return 0;
      case 'month':
        return 1;
      case 'backlog':
        return 2;
    }
  }
}
