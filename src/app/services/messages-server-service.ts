import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { FirebaseApiService, Message } from './firebase-api-service';

@Injectable({
  providedIn: 'root',
})
export class MessagesServerService {
  private readonly firebaseApiService = inject(FirebaseApiService);

  getMessages(): Observable<Message[]> {
    return this.firebaseApiService.getApiMessages();
  }

  postMessages(newMessage: Message): void {
    this.firebaseApiService.postApiMessages(newMessage).subscribe();
  }
}
