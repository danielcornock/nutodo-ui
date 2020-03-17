import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TodoCreateComponent } from './business-components/todo-create/todo-create.component';
import { TodosListComponent } from './business-components/todos-list/todos-list.component';

@NgModule({
  declarations: [TodosListComponent, TodoCreateComponent],
  imports: [CommonModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TodoModule {}
