import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiModule } from '@danielc7150/ng-api';
import { FormModule } from '@danielc7150/ng-forms';

import { CoreModule } from '../core/core.module';
import { FormInputCheckboxComponent } from './forms/templates/form-input-checkbox/form-input-checkbox.component';
import { FormInputSelectComponent } from './forms/templates/form-input-select/form-input-select.component';

@NgModule({
  declarations: [FormInputSelectComponent, FormInputCheckboxComponent],
  imports: [
    CommonModule,
    FormModule,
    CoreModule,
    ApiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FormInputSelectComponent,
    FormModule,
    CoreModule,
    ApiModule,
    FormsModule,
    ReactiveFormsModule,
    FormInputCheckboxComponent
  ]
})
export class SharedModule {}
