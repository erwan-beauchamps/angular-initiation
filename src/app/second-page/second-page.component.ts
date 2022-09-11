import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Message } from '../first-page/first-page.component';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  messageForm: FormGroup;
  private url: string = 'https://angular-initiation-default-rtdb.firebaseio.com/messages.json';

  constructor(private _formBuilder: FormBuilder, private _httpClient: HttpClient) {
    this.messageForm = this._formBuilder.group({
      author: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.messageForm.valid) {
      this._httpClient.post(this.url, this.messageForm.value).subscribe((result) => {
        console.log("this.messageForm.value", this.messageForm.value);
        console.log("result", result);
      });
    }
  }

}
