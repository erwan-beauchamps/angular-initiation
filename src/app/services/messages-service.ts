import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  private readonly messages = signal(['Premier message']);

  readonly list = this.messages.asReadonly();

  addMessage(newMessage: string): void {
    this.messages.update((list) => [...list, newMessage]);
  }

  deleteMessage(messageToRemove: string): void {
    this.messages.update((list) => list.filter((message) => message !== messageToRemove));
  }
}
