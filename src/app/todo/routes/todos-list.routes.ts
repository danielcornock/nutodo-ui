import { IHttpCollection } from '@danielc7150/ng-api';
import { Ng2StateDeclaration } from '@uirouter/angular';
import { ModelService } from 'src/app/core/model-service/model.service';

import { TodosListComponent } from '../business-components/todos-list/todos-list.component';

export const TODOS_LIST_ROUTE: Ng2StateDeclaration = {
  name: 'todosList',
  url: '/todos',
  resolve: [
    {
      provide: 'todoCollection',
      useFactory: (modelService: ModelService): Promise<IHttpCollection> => {
        return modelService.list('todos');
      },
      deps: [ModelService]
    }
  ],
  component: TodosListComponent,
  bindings: {
    todosListCollection: 'todoCollection'
  }
};
