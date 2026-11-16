import { AsyncPipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { Message } from '../services/firebase-api-service';
import { MessagesServerService } from '../services/messages-server-service';

@Component({
  selector: 'app-first-page',
  imports: [AsyncPipe, MatCardModule],
  templateUrl: './first-page.html',
  styleUrl: './first-page.scss',
})
export class FirstPage {
  private readonly messagesServerService = inject(MessagesServerService);

  // 1re méthode : subscribe() et un signal
  readonly listMessages = signal<Message[]>([{ author: 'test', message: 'test' }]);

  // 2e méthode : le pipe async s'abonne et se désabonne tout seul
  readonly listMessages$ = this.messagesServerService.getMessages();

  constructor() {
    this.messagesServerService
      .getMessages()
      .pipe(takeUntilDestroyed())
      .subscribe((messages) => this.listMessages.set(messages));
  }
}
