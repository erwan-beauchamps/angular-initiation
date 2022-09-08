import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  private messageList: string[] = ["Premier message"];

  constructor() { }

  getList(): string[] {
    return this.messageList;
  }

  addMessage(newMessage: string): void {
    this.messageList.push(newMessage);
  }

  deleteMessage(messageToRemove: string): void {
    this.messageList.forEach((value,index)=>{
      if(value == messageToRemove) {
        this.messageList.splice(index,1);
      }
  });
  }

}
