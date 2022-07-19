import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './pages/todos/todos.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TodosComponent,
    TodoFormComponent,
    TodoListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
