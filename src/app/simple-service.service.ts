import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleServiceService {

  private elementsList: string[] = ["elementFromService 1", "elementFromService 2", "elementFromService 3"];

  constructor() { }

  getList(): string[] {
    return this.elementsList;
  }

  addElement(newElement: string): void {
    this.elementsList.push(newElement);
  }

  deleteLastElement(): void {
    this.elementsList.pop();
  }

}
