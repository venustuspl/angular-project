import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements AfterContentInit, AfterContentChecked{
  @Input() title!: string;
  @Output() close = new EventEmitter<void>();
  @ContentChild('modalDiv') modalDiv!: ElementRef;
  // @ContentChild('check') checkBox!: ElementRef;

  ngAfterContentInit(): void {
    // console.log(this.modalDiv)
  }

  ngAfterContentChecked(): void {
    // console.log(this.checkBox.nativeElement.checked)
  }

  onClose() {
    this.close.emit();
  }
}
