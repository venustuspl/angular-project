import {
  AfterViewInit,
  Component,
  DoCheck, ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges, ViewChild
} from '@angular/core';
import {Todo} from "../../shared/interfaces/todo.interface";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
// implements OnChanges
// implements OnInit
export class TodoComponent{
 @Input() todo!: Todo;
 @Input() i!: number;
 @Output() delete = new EventEmitter<void>();
 @Output() changeStatus = new EventEmitter<number>();
 // @ViewChild('li') li!: ElementRef;
 openModal = false;


// constructor() {
//   console.log(this.todo)
// }

// ngOnInit(): void {
//   console.log(this.todo)
// }

 // ngOnChanges(changes: SimpleChanges): void {
 //   console.log(changes)
 // }
 //
 //  ngDoCheck(): void {
 //    console.log('ngDoCheck został wykonany!')
 //  }

  // ngAfterViewInit(): void {
  //   console.log(this.li)
  // }

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
