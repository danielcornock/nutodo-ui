import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { IHttpCollection, IHttpModel } from '@danielc7150/ng-api';
import { Subscription } from 'rxjs';

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
export class TodosListComponent implements OnInit, OnDestroy {
  @Input()
  public todosListCollection: IHttpCollection;

  public todos: IHttpCollection;
  public weeklyTodos: Array<IHttpModel>;
  public monthlyTodos: Array<IHttpModel>;
  public backlogTodos: Array<IHttpModel>;

  private _collectionObservable: Subscription;
  private _activeTodo: string = 'week';

  constructor() {}

  public async ngOnInit(): Promise<void> {
    console.log(this.todosListCollection);
    this._collectionObservable = this.todosListCollection
      .onStatusChanges()
      .subscribe(() => {
        this._assignTodos();
      });
  }

  public refreshList(): void {
    this.todosListCollection.reload();
  }

  public setActive(todoType: string): void {
    this._activeTodo = todoType;
  }

  public isActive(todoType: string): boolean {
    return this._activeTodo === todoType;
  }

  private _assignTodos(): void {
    this.weeklyTodos = this._filterTodos(TodoCategories.WEEKLY);
    this.monthlyTodos = this._filterTodos(TodoCategories.MONTHLY);
    this.backlogTodos = this._filterTodos(TodoCategories.BACKLOG);
  }

  private _filterTodos(category: TodoCategories): Array<IHttpModel> {
    return this.todosListCollection.models.filter((model: IHttpModel) => {
      return model.data.category === category;
    });
  }

  public ngOnDestroy(): void {
    this._collectionObservable.unsubscribe();
  }
}
