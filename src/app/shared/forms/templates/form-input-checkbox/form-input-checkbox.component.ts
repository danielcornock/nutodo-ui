import { Component } from '@angular/core';
import { AbstractFormInputComponent } from '@danielc7150/ng-forms';

@Component({
  selector: 'app-form-input-checkbox',
  templateUrl: './form-input-checkbox.component.html',
  styleUrls: ['./form-input-checkbox.component.scss']
})
export class FormInputCheckboxComponent extends AbstractFormInputComponent {
  constructor() {
    super();
  }

  protected setValue(): void {
    this.fieldConfig.config.setValue({
      value: this.input.nativeElement.checked,
      name: this.fieldConfig.name
    });
  }
}
