import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MessagesServerService } from '../services/messages-server-service';

// Validateur personnalisé : l'auteur doit contenir plus de 5 caractères.
export const firstValidator: ValidatorFn = (control) =>
  control.value.length > 5 ? null : { firstValidator: true };

@Component({
  selector: 'app-second-page',
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule],
  templateUrl: './second-page.html',
  styleUrl: './second-page.scss',
})
export class SecondPage {
  private readonly messagesServerService = inject(MessagesServerService);

  readonly messageForm = new FormGroup({
    author: new FormControl('', { nonNullable: true, validators: [Validators.required, firstValidator] }),
    message: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
  });

  submitForm(): void {
    if (this.messageForm.valid) {
      this.messagesServerService.postMessages(this.messageForm.getRawValue());
      this.messageForm.reset();
    }
  }
}
