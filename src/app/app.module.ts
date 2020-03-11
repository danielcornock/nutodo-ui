import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiModule } from '@danielc7150/ng-api';
import { FormModule } from '@danielc7150/ng-forms';
import { UIRouterModule } from '@uirouter/angular';
import { AuthService, AuthServiceConfig } from 'angularx-social-login';

import { AppComponent } from './app.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { CoreModule } from './core/core.module';
import { authServiceProviders } from './core/providers/auth-service.provider';
import { APP_STATES } from './routing/app-routing.constant';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ApiModule, CoreModule, FormModule, AuthenticationModule, UIRouterModule.forRoot({ states: APP_STATES })],
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
