import { Ng2StateDeclaration } from '@uirouter/angular';

import { LoginComponent } from '../business-components/login/login.component';

export const LOGIN_STATE: Ng2StateDeclaration = { name: 'login', url: '/login', component: LoginComponent };
