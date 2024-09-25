import {
  Component,
} from '@angular/core';
import {Todo} from "../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
//  implements AfterViewInit, AfterViewChecked
export class TodoListComponent{

  // @ViewChild(TodoComponent) todoComp!: TodoComponent;
  // @ViewChildren(TodoComponent) todoComps!: TodoComponent;
  todos: Todo[] = [];
  errorMessage = '';

  // ngAfterViewInit(): void {
  //   console.log(this.todoComp);
  // }
  //
  // ngAfterViewChecked(): void {
  //   console.log(this.todoComp)
  // }

  addTodo(todo: string): void {
    if(todo.length <= 3) {
      this.errorMessage = 'Zadanie powinno mieć co najmniej 4 znaki!';
      return;
    }

    this.todos.push({ name: todo, isComplete: false});
    // console.log('Aktualna lista todo: ', this.todos);
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  deleteTodo(i: number) {
    this.todos = this.todos.filter((todo, index) => index !== i)
  }

  changeTodoStatus(index: number) {
    this.todos[index] = {
      ...this.todos[index],
      isComplete: !this.todos[index].isComplete
    }
  }
}
