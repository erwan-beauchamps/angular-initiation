import { Component, inject, signal } from '@angular/core';
import { FirstDirective } from '../first-directive';
import { MessageBox } from '../message-box/message-box';
import { MessagesService } from '../services/messages-service';
import { SimpleService } from '../services/simple-service';
import { MATERIAL_IMPORTS } from '../shared/material-imports';
import { SHARED_IMPORTS } from '../shared/shared-imports';

export enum SwitchList {
  FIRST = 'first',
  SECOND = 'second',
}

@Component({
  selector: 'app-first-component',
  imports: [FirstDirective, MessageBox, ...MATERIAL_IMPORTS, ...SHARED_IMPORTS],
  templateUrl: './first-component.html',
  styleUrl: './first-component.scss',
})
export class FirstComponent {
  private readonly simpleService = inject(SimpleService);
  private readonly messagesService = inject(MessagesService);

  protected readonly switchList = SwitchList;

  readonly isShowed = signal(false);
  readonly list = this.simpleService.list;
  readonly messageList = this.messagesService.list;
  readonly buttonList = [
    'Exemple de bouton possible',
    'On peut aussi ecrire ça',
    'Bonjour à tous',
    'Avec plaisir',
    'Merci beaucoup',
  ];
  readonly switchValue = signal<string>(SwitchList.FIRST);

  display(): void {
    this.isShowed.update((isShowed) => !isShowed);
  }

  changeSwitchValue(newValue: string): void {
    this.switchValue.set(newValue);
  }

  add(): void {
    this.simpleService.addElement('New element');
  }

  delete(): void {
    this.simpleService.deleteLastElement();
  }

  deleteMessage(message: string): void {
    this.messagesService.deleteMessage(message);
  }
}
