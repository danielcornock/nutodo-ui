import { Ng2StateDeclaration } from '@uirouter/angular';

import { TodosListComponent } from '../business-components/todos-list/todos-list.component';

export const TODOS_LIST_ROUTES: Ng2StateDeclaration = {
  name: 'todosList',
  url: '/todos',
  component: TodosListComponent
};
