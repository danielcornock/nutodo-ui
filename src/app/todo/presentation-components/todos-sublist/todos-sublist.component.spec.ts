import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosSublistComponent } from './todos-sublist.component';

describe('TodosSublistComponent', () => {
  let component: TodosSublistComponent;
  let fixture: ComponentFixture<TodosSublistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodosSublistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodosSublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
