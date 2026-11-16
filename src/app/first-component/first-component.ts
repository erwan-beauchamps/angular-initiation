import { Component, signal } from '@angular/core';
import { FirstDirective } from '../first-directive';
import { MATERIAL_IMPORTS } from '../shared/material-imports';
import { SHARED_IMPORTS } from '../shared/shared-imports';

export enum SwitchList {
  FIRST = 'first',
  SECOND = 'second',
}

@Component({
  selector: 'app-first-component',
  imports: [FirstDirective, ...MATERIAL_IMPORTS, ...SHARED_IMPORTS],
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
