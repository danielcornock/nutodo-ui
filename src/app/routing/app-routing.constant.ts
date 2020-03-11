import { Ng2StateDeclaration } from '@uirouter/angular';

import { AUTHENTICATION_STATES } from '../authentication/routes/authentication.routes';
import { TODO_ROUTES } from '../todo/routes/todo.routes';
import { APP_ROUTES } from './app.routes';

export const APP_STATES: Array<Ng2StateDeclaration> = [...AUTHENTICATION_STATES, ...TODO_ROUTES, APP_ROUTES];
