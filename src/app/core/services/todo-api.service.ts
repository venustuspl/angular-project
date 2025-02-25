import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Todo} from "../../shared/interfaces/todo.interface";
import {TodoService} from "./todo.service";

@Injectable({
  providedIn: 'root'
})
export class TodoApiService {

  constructor(private http: HttpClient, private todoService: TodoService) {}

  getTodos(): Observable<Todo[]> {
    const headers = new HttpHeaders({
      'Authorization': 'bearer test',
      'TestowyNaglowek': 'test'
    })
    headers.append( 'Authorization', 'bearer test')

    return this.http.get<Todo[]>('http://localhost:3000/todo', {
      headers
    }).pipe(
      tap((todos) => this.todoService.todos = todos)
    );
  }

  getTodo(id: number): Observable<Todo> {
    return this.http.get<Todo>(`http://localhost:3000/todo/${id}`);
  }

  postTodo(todo: Omit<Todo, "id">): Observable<Todo> {
    return this.http.post<Todo>('http://localhost:3000/todo', todo).pipe(
      tap((todo) => this.todoService.addTodo(todo))
    );
  }

  deleteTodo(id: number): Observable<{}> {
    return this.http.delete<{}>(`http://localhost:3000/todo/${id}`).pipe(
      tap(() => this.todoService.deleteTodo(id))
    );
  }

  patchTodo(id: number, todo: Omit<Todo, "id" | "name">): Observable<Todo> {
    return this.http.patch<Todo>(`http://localhost:3000/todo/${id}`, todo).pipe(
      tap((todo) => this.todoService.changeTodoStatus(todo.id, todo.isComplete))
    );
  }
}
