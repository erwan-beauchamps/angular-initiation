import { Component, inject, input } from '@angular/core';
import { MessagesService } from '../services/messages-service';
import { MATERIAL_IMPORTS } from '../shared/material-imports';

@Component({
  selector: 'app-message-box',
  imports: [...MATERIAL_IMPORTS],
  templateUrl: './message-box.html',
  styleUrl: './message-box.scss',
})
export class MessageBox {
  private readonly messagesService = inject(MessagesService);

  readonly name = input('No name');

  add(): void {
    this.messagesService.addMessage(this.name());
  }
}
