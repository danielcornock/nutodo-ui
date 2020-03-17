import { Component, OnInit } from '@angular/core';
import { IHttpModel } from '@danielc7150/ng-api';
import { StateService } from '@uirouter/core';
import { ModelService } from 'src/app/core/model-service/model.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  public todos: IHttpModel;

  constructor(private readonly _modelService: ModelService, private readonly _stateService: StateService) {}

  public async ngOnInit(): Promise<void> {
    this.todos = await this._modelService.get('todos');
  }

  public createNewTodo(): void {
    this._stateService.go('todoCreate');
  }
}
