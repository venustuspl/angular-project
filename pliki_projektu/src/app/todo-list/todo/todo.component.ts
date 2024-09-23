import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
// implements OnChanges
export class TodoComponent implements OnChanges  {
 @Input() todo!: Todo;
 @Input() i!: number;
 @Output() delete = new EventEmitter<void>();
 @Output() changeStatus = new EventEmitter<number>();
 openModal = false;

 ngOnChanges(changes: SimpleChanges): void {
   console.log(changes)
 }

  changeTodoStatus() {
    this.changeStatus.emit(this.i);
  }

  toggleModal(): void {
    this.openModal = !this.openModal;
  }

  deleteTodo() {
    this.delete.emit();
  }
}
