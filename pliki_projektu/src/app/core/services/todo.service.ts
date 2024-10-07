import { Injectable } from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todos: Todo[] = JSON.parse(localStorage.getItem('todos')!) ?? [];

  constructor() { }

  public get todos() {
    return this._todos.slice();
  }

  addTodo(name: string): void {
    this._todos.push({ name, isComplete: false});
    this.saveToLocalStorage();
  }

  deleteTodo(i: number) {
    this._todos = this.todos.filter((todo, index) => index !== i)
    this.saveToLocalStorage();
  }

  changeTodoStatus(index: number) {
    this._todos[index] = {
      ...this.todos[index],
      isComplete: !this.todos[index].isComplete
    }
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
