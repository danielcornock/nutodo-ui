import { Ng2StateDeclaration } from '@uirouter/angular';

import { TodoCreateComponent } from '../business-components/todo-create/todo-create.component';

export const TODO_CREATE_ROUTE: Ng2StateDeclaration = {
  name: 'todoCreate',
  url: '/todos/create',
  component: TodoCreateComponent
};
