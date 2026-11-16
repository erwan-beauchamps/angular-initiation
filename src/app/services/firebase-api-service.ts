import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirebaseApiService {
  private readonly httpClient = inject(HttpClient);
  private readonly url = 'https://angular-initiation-default-rtdb.firebaseio.com/messages.json';

  getApiMessages(): Observable<Message[]> {
    // Firebase renvoie un objet { id: message }, on le transforme en tableau.
    return this.httpClient
      .get<Record<string, Message> | null>(this.url)
      .pipe(map((result) => Object.values(result ?? {})));
  }

  postApiMessages(newMessage: Message): Observable<unknown> {
    return this.httpClient.post(this.url, newMessage);
  }
}
