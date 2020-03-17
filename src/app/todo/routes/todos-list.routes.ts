import { Ng2StateDeclaration } from '@uirouter/angular';

import { TodosListComponent } from '../business-components/todos-list/todos-list.component';

export const TODOS_LIST_ROUTE: Ng2StateDeclaration = {
  name: 'todosList',
  url: '/todos',
  component: TodosListComponent
};
