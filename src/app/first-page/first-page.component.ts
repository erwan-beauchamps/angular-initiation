import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Message } from '../services/firebase-api.service';
import { MessagesServerService } from '../services/messages-server.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  public listMessages: Message[] = [{author: "test", message: "test"}];
  public listMessageObservable$: Observable<Message[]>;

  constructor(private _messagesServerService: MessagesServerService) {
    this.listMessageObservable$ = new Observable<Message[]>();
  }

  ngOnInit(): void {
    this.listMessageObservable$ = this._messagesServerService.getMessages()
    this.listMessageObservable$.subscribe((result: Message[]) => {
      console.log()
      this.listMessages = result;
    });;
  }

}
