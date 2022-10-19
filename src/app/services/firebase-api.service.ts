import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Message {
  author: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseApiService {

  private url: string = 'https://angular-initiation-default-rtdb.firebaseio.com/messages.json';

  constructor(private _httpClient: HttpClient) { }

  getApiMessages(): Observable<Message[]> {
    return this._httpClient.get<Message[]>(this.url);
  }

}
