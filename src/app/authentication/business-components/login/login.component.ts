import { Component } from '@angular/core';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private readonly _authService: AuthService, private readonly _userService: UserService) {}

  public async signInWithGoogle(): Promise<void> {
    const user: any = await this._authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this._userService.login(user.authToken);
  }

  public signOutWithGoogle(): void {
    this._authService.signOut();
    localStorage.removeItem('jwt_token');
  }
}
