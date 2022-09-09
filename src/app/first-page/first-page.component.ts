import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface Message {
  author: string;
  message: string;
}

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  private url: string = 'https://angular-initiation-default-rtdb.firebaseio.com/messages.json';
  public listMessages: Message[] = [{author: "test", message: "test"}];
  public listMessageObservable$: Observable<Message[]>;

  constructor(private _httpClient: HttpClient) {
    this.listMessageObservable$ = new Observable<Message[]>();
  }

  ngOnInit(): void {
    this._httpClient.get<Message[]>(this.url).subscribe((result: Message[]) => {
      this.listMessages = result;
      console.log("this.listMessages", this.listMessages);
    });
    this.listMessageObservable$ = this._httpClient.get<Message[]>(this.url)
  }

}
