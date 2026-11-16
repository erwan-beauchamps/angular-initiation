import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appFirstDirective]',
})
export class FirstDirective {
  private readonly elementRef = inject(ElementRef);

  constructor() {
    this.elementRef.nativeElement.style.color = 'blue';
  }
}
