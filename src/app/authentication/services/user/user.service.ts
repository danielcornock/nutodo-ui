import { Injectable } from '@angular/core';
import { IHttpModel } from '@danielc7150/ng-api';
import { StateService } from '@uirouter/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ModelService } from 'src/app/core/model-service/model.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _userSubject: BehaviorSubject<IHttpModel> = new BehaviorSubject<IHttpModel>(null);

  constructor(private readonly _modelService: ModelService, private readonly _stateService: StateService) {}

  public async login(authToken: string): Promise<void> {
    const user: IHttpModel = await this._modelService.post('auth/google', { authToken });
    this._setUser(user);
    this._stateService.go('todosList');
  }

  private _setUser(userModel: IHttpModel): void {
    this._userSubject.next(userModel);
  }

  public getUser(): Observable<IHttpModel> {
    return this._userSubject.asObservable();
  }
}
