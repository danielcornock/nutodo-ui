import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService, GoogleLoginProvider } from 'angularx-social-login';
import { TestPromise } from 'src/app/testing/test-promise';

import { UserService } from '../../services/user/user.service';
import { UserServiceStub } from '../../services/user/user.service.stub';
import { AuthServiceStub } from '../../testing/auth.service.stub';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent,
    fixture: ComponentFixture<LoginComponent>,
    dependencies: {
      authService: AuthServiceStub;
      userService: UserServiceStub;
    };

  function getByCss(element: string): DebugElement {
    return fixture.debugElement.query(By.css(`.login-${element}`));
  }

  beforeEach(async(() => {
    dependencies = {
      authService: new AuthServiceStub(),
      userService: new UserServiceStub()
    };

    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [
        {
          provide: AuthService,
          useValue: dependencies.authService
        },
        {
          provide: UserService,
          useValue: dependencies.userService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('when signing in with google', () => {
    let signInPromise: TestPromise<any>;

    beforeEach(() => {
      signInPromise = new TestPromise();
      (dependencies.authService.signIn as jasmine.Spy).and.returnValue(signInPromise.promise);
      getByCss('googleSignIn').nativeElement.click();
    });

    it('should open the google window for the user to sign in', () => {
      expect(dependencies.authService.signIn).toHaveBeenCalledWith(GoogleLoginProvider.PROVIDER_ID);
    });

    describe('when the user has signed in', () => {
      beforeEach(async(() => {
        signInPromise.resolve({ authToken: 'authToken' });
      }));

      it('should log the user in', () => {
        expect(dependencies.userService.login).toHaveBeenCalledWith('authToken');
      });
    });
  });

  describe('when signing out of google', () => {
    beforeEach(() => {
      spyOn(localStorage, 'removeItem');
      getByCss('googleSignOut').nativeElement.click();
    });

    it('should sign the user out of google', () => {
      expect(dependencies.authService.signOut).toHaveBeenCalledWith();
    });

    it('should forget the users token', () => {
      expect(localStorage.removeItem).toHaveBeenCalledWith('jwt_token');
    });
  });
});
