import { Component, OnInit } from '@angular/core';
import { IHttpModel } from '@danielc7150/ng-api';
import { FormContainer, FormFactory } from '@danielc7150/ng-forms';
import { StateService } from '@uirouter/core';
import { ModelService } from 'src/app/core/model-service/model.service';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.scss']
})
export class TodoCreateComponent implements OnInit {
  public formContainer: FormContainer;
  public todoModel: IHttpModel;

  constructor(
    private readonly _formFactory: FormFactory,
    private readonly _modelService: ModelService,
    private readonly _stateService: StateService
  ) {}

  public async ngOnInit(): Promise<void> {
    await this._getTemplate();
    this._createForm();
  }

  public async saveTodo(): Promise<void> {
    if (this.formContainer.form.valid) {
      await this.todoModel.update();
      this._stateService.go('todosList');
    }
  }

  public isValid(): boolean {
    return this.formContainer.form.valid;
  }

  private async _getTemplate(): Promise<void> {
    this.todoModel = await this._modelService.get('todos/template');
  }

  private _createForm(): void {
    this.formContainer = this._formFactory.createModelForm(this.todoModel, {
      fields: [
        {
          name: 'title',
          config: {
            required: true
          }
        },
        {
          name: 'category',
          config: {
            options: [
              {
                value: 'week',
                label: 'Week'
              },
              {
                value: 'month',
                label: 'Month'
              },
              {
                value: 'backlog',
                label: 'Backlog'
              }
            ]
          }
        }
      ]
    });
  }
}
