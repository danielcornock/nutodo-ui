import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/core';
import { AuthService } from 'angularx-social-login';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private readonly _authService: AuthService,
    private readonly _stateService: StateService
  ) {}

  public async ngOnInit(): Promise<void> {
    this._authService.authState.subscribe((user) => {
      if (user) {
        localStorage.setItem('jwt_token', user.authToken);
        this._stateService.go('todosList');
      }
    });
  }
}
