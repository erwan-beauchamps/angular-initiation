import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPageComponent } from './second-page.component';

describe('SecondPageComponent', () => {
  let component: SecondPageComponent;
  let fixture: ComponentFixture<SecondPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPageComponent ],
      imports: [FormsModule, ReactiveFormsModule, HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test a form group elements count', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('.first-form');
    const inputElements = formElement.querySelectorAll('input')
    expect(inputElements.length).toEqual(2);
  });

  it('check initial values form group', () => {
    const formGroup = component.messageForm;
    const initialValues = {
      author: '',
      message: ''
    };
    expect(formGroup.value).toEqual(initialValues);
  });

  it('check author value before writing and validation', () => {
    const authorFormElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('.first-form')
        .querySelectorAll('input')[0];
    const authorFormControl = component.messageForm.get('author');
    expect(authorFormControl?.value).toEqual(authorFormElement.value);
    expect(authorFormControl?.errors).not.toBeNull();
    expect(authorFormControl && authorFormControl.errors && authorFormControl.errors['required']).toBeTruthy();
  });

  it('check author value before writing and validation', () => {
    let authorFormElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('.first-form')
        .querySelectorAll('input')[0];
    authorFormElement.value = 'Erwan Beauchamps';
    authorFormElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      const authorForm= component.messageForm.get('author');
      expect(authorFormElement.value).toEqual(authorForm?.value);
      expect(authorForm?.errors).toBeNull();
    })
  });

  it('check form validation ', () => {
    let authorFormElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('.first-form')
        .querySelectorAll('input')[0];
    let messageFormElement: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('.first-form')
        .querySelectorAll('input')[1];

    authorFormElement.value = 'Erwan Beauchamps';
    messageFormElement.value = "Message Erwan";

    authorFormElement.dispatchEvent(new Event('input'));
    messageFormElement.dispatchEvent(new Event('input'));

    const isFormValid = component.messageForm.valid;

    fixture.whenStable().then(() => {
      expect(isFormValid).toBeTruthy();
    })
  });

});
