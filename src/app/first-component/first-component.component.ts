import { MessagesService } from './../services/messages.service';
import { Component, OnInit } from '@angular/core';
import { SimpleServiceService } from '../services/simple-service.service';

export enum SwitchList {
  FIRST = "first",
  SECOND = "second"
}

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  public isShowed: boolean = false;
  public switchList = SwitchList;
  public list: string[] = [];
  public messageList: string[] = [];
  public buttonList: string[] = ["Exemple de bouton possible", "On peut aussi ecrire ça", "Bonjour à tous",
    "Avec plaisir", "Merci beaucoup"];
  public switchValue: string = SwitchList.FIRST;

  constructor(private simpleService: SimpleServiceService, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.list = this.simpleService.getList();
    this.messageList = this.messageService.getList();
  }

  display(): void {
    this.isShowed = !this.isShowed;
  }

  changeSwitchValue(newValue: string): void {
    this.switchValue = newValue;
  }

  add(): void {
    this.simpleService.addElement("New element");
  }

  delete(): void {
    this.simpleService.deleteLastElement();
  }

  deleteMessage(message: string): void {
    this.messageService.deleteMessage(message);
  }

}
