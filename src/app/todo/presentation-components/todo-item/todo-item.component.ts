import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IHttpModel } from '@danielc7150/ng-api';

import { TODO_CATEGORY } from '../../constants/todo-category.constant';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input()
  public todoItemModel: IHttpModel;

  @Output()
  public todoItemMoveLeft: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public todoItemMoveRight: EventEmitter<void> = new EventEmitter<void>();

  public TODO_CATEGORY: typeof TODO_CATEGORY = TODO_CATEGORY;
  public isMoved: boolean = false;

  constructor() {}

  public setCheckedStatus(event: Event): void {
    this.todoItemModel.data.completed = (event.target as HTMLInputElement).checked;
    this.todoItemModel.update();
  }

  public categoryIsNot(categoryString: TODO_CATEGORY): boolean {
    return this.todoItemModel.data.category !== categoryString;
  }
  public moveLeft(): void {
    this.todoItemMoveLeft.emit();
    this.isMoved = true;
  }

  public moveRight(): void {
    this.todoItemMoveRight.emit();
    this.isMoved = true;
  }
}
