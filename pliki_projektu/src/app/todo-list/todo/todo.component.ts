import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
 @Input() todo!: Todo;
 @Input() i!: number;
 @Output() delete = new EventEmitter<void>();
 openModal = false;

  changeTodoStatus(todo: Todo) {
    todo.isComplete = !todo.isComplete;
  }

  toggleModal(): void {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
