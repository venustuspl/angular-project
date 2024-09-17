import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <p class="text-center">
      &copy; Prawa zastrzeżone
      *to jest component inline
    </p>
  `,
  styleUrls: ['./footer.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FooterComponent {

}
