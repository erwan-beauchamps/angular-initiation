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

  constructor(private _httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this._httpClient.get<Message[]>(this.url).subscribe((result) => {
      this.listMessages = Object.keys(result).map(function(key: any){
        return result[key];  
      });
    });
  }

}
