import { MessagesService } from './../services/messages.service';
import { Component, OnInit } from '@angular/core';
import { SimpleServiceService } from '../services/simple-service.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
