import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFirstDirective]'
})
export class FirstDirectiveDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = 'blue';
  }

}
