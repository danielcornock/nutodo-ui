import { Ng2StateDeclaration } from '@uirouter/angular';

import { TODO_CREATE_ROUTE } from './todo-create.routes';
import { TODOS_LIST_ROUTE } from './todos-list.routes';

export const TODO_ROUTES: Array<Ng2StateDeclaration> = [
  TODOS_LIST_ROUTE,
  TODO_CREATE_ROUTE
];
