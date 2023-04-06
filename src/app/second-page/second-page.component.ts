import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MessagesServerService } from '../services/messages-server.service';

export interface BoxMessage {
  author: string;
  message: string;
}

export enum BoxMessageError {
  NOT_FOUND = 'not_found',
  ERROR_404 = 'error_404',
  WRONG_PWD = 'wrong_pwd',
  SAME_AUTHOR = 'Auteur et message identique'
}

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.scss']
})
export class SecondPageComponent implements OnInit {

  messageForm: FormGroup;
  private url: string = 'https://angular-initiation-default-rtdb.firebaseio.com/messages.json';
  authorError = '';
  localBoxMessageError = BoxMessageError;

  constructor(private _formBuilder: FormBuilder, private _messagesServerService: MessagesServerService) {
    this.messageForm = this._formBuilder.group({
      author: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.initValueChange();
  }

  submitForm(): void {
    if (this.messageForm.valid) {
      console.log('value => ', this.messageForm.value);
    }
  }

  initValueChange() {
    this.messageForm.valueChanges.subscribe((values: BoxMessage) => {
      console.log('valueChanges =>', values);
      let isInvalid = true;
      if (values.author === BoxMessageError.NOT_FOUND) {
        this.authorError = BoxMessageError.NOT_FOUND;
      } else if (values.author === BoxMessageError.ERROR_404) {
        this.authorError = BoxMessageError.ERROR_404;
      } else if (values.author === BoxMessageError.WRONG_PWD) {
        this.authorError = BoxMessageError.WRONG_PWD;
      } else if (values.author === values.message) {
        this.authorError = BoxMessageError.SAME_AUTHOR;
      } else {
        this.authorError = '';
        isInvalid = false;
      }
      if (this.authorError) {
        const errors = this.messageForm.controls['author'].errors || {};
        this.messageForm.controls['author'].setErrors({
          'authorError': null,
          ...errors
        })
      }
      console.log('this.errorForm =>', this.authorError);
    });
  }

}
