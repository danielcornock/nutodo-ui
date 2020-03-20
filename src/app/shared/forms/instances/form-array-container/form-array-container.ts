import { AbstractControl, FormArray } from '@angular/forms';
import { IHttpModel, IHttpObject } from '@danielc7150/ng-api';
import { FormInputField, IControlExport, IFormInputConfig, IFormInputConfigConfig } from '@danielc7150/ng-forms';

export class FormArrayContainer {
  public form: FormArray;
  public fields: Array<FormInputField>;

  constructor(collection: Array<IHttpModel>, config: IFormInputConfig) {
    this.fields = this._createFormFields(config, collection);
    this.form = this._createFormArray(this.fields);
  }

  private _createFormArray(fields: Array<FormInputField>): FormArray {
    const controlArray: Array<AbstractControl> = fields.map(
      (field: FormInputField) => {
        return field.control;
      }
    );

    return new FormArray(controlArray);
  }

  private _createFormFields(
    formConfig: IFormInputConfig,
    collection: Array<IHttpModel>
  ): Array<FormInputField> {
    return collection.map((model: IHttpModel) => {
      let config: IFormInputConfig = formConfig;

      if (formConfig.indexLabel) {
        config = {
          ...formConfig,
          label: model.data[formConfig.indexLabel]
        };
      }

      config = {
        ...config,
        config: {
          ...formConfig.config,
          ...this._setModelGetterFn(formConfig, model.data),
          ...this._setModelSetterFn(formConfig, model)
        }
      };

      return new FormInputField(config);
    });
  }

  private _setModelGetterFn(
    fieldConfig: IFormInputConfig,
    data: IHttpObject
  ): Partial<IFormInputConfigConfig> {
    return {
      getValue: () => {
        return data[fieldConfig.name];
      }
    };
  }

  private _setModelSetterFn(
    fieldConfig: IFormInputConfig,
    model: IHttpModel
  ): Partial<IFormInputConfigConfig> {
    return {
      setValue: (val: IControlExport) => {
        model.data[fieldConfig.name] = val.value;
        model.update();
      }
    };
  }
}
