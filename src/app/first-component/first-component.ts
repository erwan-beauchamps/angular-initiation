import { Component, signal } from '@angular/core';
import { FirstDirective } from '../first-directive';

export enum SwitchList {
  FIRST = 'first',
  SECOND = 'second',
}

@Component({
  selector: 'app-first-component',
  imports: [FirstDirective],
  templateUrl: './first-component.html',
  styleUrl: './first-component.scss',
})
export class FirstComponent {
  protected readonly switchList = SwitchList;

  readonly isShowed = signal(false);
  readonly list = ['First Element', 'Second Element', 'Third Element'];
  readonly switchValue = signal<string>(SwitchList.FIRST);

  display(): void {
    this.isShowed.update((isShowed) => !isShowed);
  }

  changeSwitchValue(newValue: string): void {
    this.switchValue.set(newValue);
  }
}
