import { Injectable } from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // private _todos: Todo[] = JSON.parse(localStorage.getItem('todos')!) ?? [];
  private _todos: Todo[] = [];
  todoChanged = new Subject<Todo[]>();

  constructor() { }

  public get todos() {
    return this._todos.slice();
  }

  public set todos(arrTodos: Todo[]) {
    this._todos = [...arrTodos];
    this.todoChanged.next(this.todos)
  }

  getTodo(index: number): Todo | undefined {
    return this.todos[index];
  }

  addTodo(todo: Todo): void {
    this._todos.push(todo);
    this.todoChanged.next(this.todos);
  }

  deleteTodo(id: number) {
    this._todos = this.todos.filter((todo, index) => todo.id !== id)
    this.todoChanged.next(this.todos);
  }

  changeTodoStatus(index: number) {
    this._todos[index] = {
      ...this.todos[index],
      isComplete: !this.todos[index].isComplete
    }
    this.saveToLocalStorage();
    this.todoChanged.next(this.todos);
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
