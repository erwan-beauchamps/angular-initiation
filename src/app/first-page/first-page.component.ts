import { Component, OnInit } from '@angular/core';
import { Message } from '../services/firebase-api.service';
import { MessagesServerService } from '../services/messages-server.service';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {

  public listMessages: Message[] = [{author: "test", message: "test"}];

  constructor(private _messagesServerService: MessagesServerService) {
  }

  ngOnInit(): void {
    this._messagesServerService.getMessages().subscribe((result: Message[]) => {
      this.listMessages = Object.keys(result).map(function(key: any){
        return result[key];  
      });
    });
  }

}
