import { Ng2StateDeclaration } from '@uirouter/angular';

import { AppComponent } from '../app.component';

export const APP_ROUTES: Ng2StateDeclaration = {
  name: 'app',
  url: '/',
  redirectTo: 'login',
  component: AppComponent
};
