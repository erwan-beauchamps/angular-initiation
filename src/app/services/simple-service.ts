import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SimpleService {
  private readonly elements = signal(['elementFromService 1', 'elementFromService 2', 'elementFromService 3']);

  // Les composants lisent la liste sans pouvoir la modifier directement.
  readonly list = this.elements.asReadonly();

  addElement(newElement: string): void {
    this.elements.update((list) => [...list, newElement]);
  }

  deleteLastElement(): void {
    this.elements.update((list) => list.slice(0, -1));
  }
}
