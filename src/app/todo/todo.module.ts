import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { TodoCreateComponent } from './business-components/todo-create/todo-create.component';
import { TodosListComponent } from './business-components/todos-list/todos-list.component';
import { TodosSublistComponent } from './presentation-components/todos-sublist/todos-sublist.component';
import { TodoItemComponent } from './presentation-components/todo-item/todo-item.component';

@NgModule({
  declarations: [TodosListComponent, TodoCreateComponent, TodosSublistComponent, TodoItemComponent],
  imports: [CommonModule, SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TodoModule {}
