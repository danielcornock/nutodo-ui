import { Injectable } from '@angular/core';
import { IHttpModel } from '@danielc7150/ng-api';
import { IFormInputConfig } from '@danielc7150/ng-forms';

import { FormArrayContainer } from '../../instances/form-array-container/form-array-container';

@Injectable({
  providedIn: 'root'
})
export class FormArrayFactory {
  constructor() {}

  public create(
    collection: Array<IHttpModel>,
    formConfig: IFormInputConfig
  ): FormArrayContainer {
    return new FormArrayContainer(collection, formConfig);
  }
}
