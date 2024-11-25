import {
  Component, OnDestroy, OnInit,
} from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";
import {TodoService} from "../core/services/todo.service";
import {TestService} from "../core/services/test.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
//  implements AfterViewInit, AfterViewChecked
export class TodoListComponent implements OnInit, OnDestroy{
  todos: Todo[] = this.todoService.todos;
  errorMessage = '';
  sub!: Subscription;

  constructor(private todoService: TodoService, private testService: TestService) {}


  ngOnInit(): void {
     this.sub = this.todoService.todoChanged.subscribe({
       next: arrTodos => this.todos = arrTodos
     })
  }


  addTodo(todo: string): void {
    if(todo.length <= 3) {
      this.errorMessage = 'Zadanie powinno mieć co najmniej 4 znaki!';
      return;
    }

    this.todoService.addTodo(todo);
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  deleteTodo(i: number) {
    this.todoService.deleteTodo(i);
  }

  changeTodoStatus(index: number) {
    this.todoService.changeTodoStatus(index);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
