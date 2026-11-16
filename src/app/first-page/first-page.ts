import { Component, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatCardModule } from '@angular/material/card';
import { Message } from '../services/firebase-api-service';
import { MessagesServerService } from '../services/messages-server-service';

@Component({
  selector: 'app-first-page',
  imports: [MatCardModule],
  templateUrl: './first-page.html',
  styleUrl: './first-page.scss',
})
export class FirstPage {
  private readonly messagesServerService = inject(MessagesServerService);

  readonly listMessages = signal<Message[]>([{ author: 'test', message: 'test' }]);

  constructor() {
    this.messagesServerService
      .getMessages()
      .pipe(takeUntilDestroyed())
      .subscribe((messages) => this.listMessages.set(messages));
  }
}
