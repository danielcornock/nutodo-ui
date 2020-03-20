import { TestBed } from '@angular/core/testing';

import { FormArrayFactory } from './form-array-factory.service';

describe('FormArrayService', () => {
  let service: FormArrayFactory;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormArrayFactory);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
