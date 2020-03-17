import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UIRouterModule } from '@uirouter/angular';
import { AuthService, AuthServiceConfig } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { authServiceProviders } from './core/providers/auth-service.provider';
import { APP_STATES } from './routing/app-routing.constant';
import { SharedModule } from './shared/shared.module';
import { TodoModule } from './todo/todo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TodoModule,
    AuthenticationModule,
    SharedModule,
    UIRouterModule.forRoot({ states: APP_STATES })
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: authServiceProviders
    },
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
