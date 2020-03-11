import { AuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';

export function authServiceProviders(): AuthServiceConfig {
  return new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider('422423693984-f3min4r4o70qfa4ifsm53gisj6s9vku6.apps.googleusercontent.com')
    }
  ]);
}
