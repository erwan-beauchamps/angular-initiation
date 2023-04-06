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

export enum ControlEnum {
  AUTHOR = 'author',
  MESSAGE = 'message',
  AUTHOR_ERROR = 'authorError'
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
  localControlEnum = ControlEnum;

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
    }
  }

  initValueChange() {
    this.messageForm.valueChanges.subscribe((values: BoxMessage) => {
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
        this.messageForm.controls[ControlEnum.AUTHOR].setErrors({AUTHOR_ERROR: null})
      }
    });
  }

}
