import { Component, Input, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.scss']
})
export class MessageBoxComponent implements OnInit {

  @Input() name: string = "No name";

  constructor(private messageService: MessagesService) { }

  ngOnInit(): void {
  }

  add(): void {
    this.messageService.addMessage(this.name);
  }

}
