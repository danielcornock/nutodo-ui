import { Component, OnInit } from '@angular/core';
import { IHttpModel } from '@danielc7150/ng-api';
import { StateService } from '@uirouter/core';
import { ModelService } from 'src/app/core/model-service/model.service';

import { ITodo } from '../../interfaces/todo.interface';

const enum TodoCategories {
  WEEKLY = 'week',
  MONTHLY = 'month',
  BACKLOG = 'backlog'
}

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  public todos: IHttpModel;
  public weeklyTodos: Array<ITodo>;
  public monthlyTodos: Array<ITodo>;
  public backlogTodos: Array<ITodo>;

  constructor(
    private readonly _modelService: ModelService,
    private readonly _stateService: StateService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.todos = await this._modelService.get('todos');
    this._assignTodos();
    console.log(this.weeklyTodos);
  }

  public createNewTodo(): void {
    this._stateService.go('todoCreate');
  }

  private _assignTodos(): void {
    this.weeklyTodos = this._filterTodos(TodoCategories.WEEKLY);
    this.monthlyTodos = this._filterTodos(TodoCategories.MONTHLY);
    this.backlogTodos = this._filterTodos(TodoCategories.BACKLOG);
  }

  private _filterTodos(category: TodoCategories): Array<ITodo> {
    return this.todos.data.filter((todo: ITodo) => {
      return todo.category === category;
    });
  }
}
