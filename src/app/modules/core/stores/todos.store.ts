import { Injectable } from "@angular/core";
import { Todo } from "../models/todo.model";
import { AbstractStore } from "./abstract-store.model";

export interface TodosState {
  todos: Todo[] | null
}

export const initialTodosState = {
  todos: null
}


@Injectable({
  providedIn: 'root'
})
export class TodosStore extends AbstractStore<TodosState> {
  constructor() {
    super({ ...initialTodosState });
  }

  get t(){
    return this.state.todos as Array<Todo>;
  }

  public createTodo(todo: Todo): void {
    this.setState({
      ...this.state,
      todos: [...(this.state?.todos || []), todo]
    });
  }

  public updateTodo(todoId: number, todo: Todo): void {
    this.deleteTodo(todoId);
    this.createTodo(todo);
  }

  public deleteTodo(todoId: number): void {
    const find = this.t.findIndex(a => a.id === todoId);
    let x = [...this.t];
    x.splice(find,1);
    this.setState({
      ...this.state,
      todos: x
    });
  }
}
