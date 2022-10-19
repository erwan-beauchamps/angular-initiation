import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MessagesServerService } from '../services/messages-server.service';

export function firstValidator(input: FormControl) {
  return (input.value.length > 5) ? null : {firstValidator: true};
}

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  messageForm: FormGroup;
  private url: string = 'https://angular-initiation-default-rtdb.firebaseio.com/messages.json';

  constructor(private _formBuilder: FormBuilder, private _messagesServerService: MessagesServerService) {
    this.messageForm = this._formBuilder.group({
      author: new FormControl('', [Validators.required, firstValidator]),
      message: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  submitForm(): void {
    if (this.messageForm.valid) {
      this._messagesServerService.postMessages(this.messageForm.value);
    }
  }

}
