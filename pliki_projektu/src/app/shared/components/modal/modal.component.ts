import {
  Component,
  EventEmitter,
  Input, OnDestroy, OnInit,
  Output
} from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy{
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  sub!: Subscription;


  onClose() {
    this.close.emit();
  }
  ngOnInit(): void {
    // this.sub = of(1, 2, 3).subscribe({
    //   next: value => console.log(value),
    //   error: err => console.log(err),
    //   complete: () => console.log('Test')
    // })
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    // console.log(this.sub)
  }
}
