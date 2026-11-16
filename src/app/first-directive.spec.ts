import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { FirstDirective } from './first-directive';

// La directive utilise inject() : on la teste à travers un composant hôte
// au lieu de l'instancier avec new.
@Component({
  imports: [FirstDirective],
  template: `<p appFirstDirective>Texte</p>`,
})
class Host {}

describe('FirstDirective', () => {
  it('should color the text in blue', async () => {
    const fixture = TestBed.createComponent(Host);
    await fixture.whenStable();
    const paragraph: HTMLElement = fixture.nativeElement.querySelector('p');
    expect(paragraph.style.color).toBe('blue');
  });
});
