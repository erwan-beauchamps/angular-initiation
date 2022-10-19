import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FirebaseApiService } from './firebase-api.service';

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessagesServerService {

  constructor(private _messageApiService: FirebaseApiService) { }

  getMessages(): Observable<Message[]> {
    return this._messageApiService.getApiMessages();
  }

  postMessages(newMessage: Message): void {
    this._messageApiService.postApiMessages(newMessage).subscribe((result) => {});
  }

}
