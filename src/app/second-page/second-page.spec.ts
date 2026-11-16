import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPage } from './second-page';

describe('SecondPage', () => {
  let component: SecondPage;
  let fixture: ComponentFixture<SecondPage>;
  let inputs: HTMLInputElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPage],
      // Pas de vraie requête HTTP pendant les tests
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondPage);
    component = fixture.componentInstance;
    await fixture.whenStable();

    const formElement: HTMLFormElement = fixture.nativeElement.querySelector('.first-form');
    inputs = Array.from(formElement.querySelectorAll('input'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as many inputs as form controls', () => {
    expect(inputs.length).toEqual(Object.keys(component.messageForm.controls).length);
  });

  it('should have empty initial values', () => {
    expect(component.messageForm.value).toEqual({ author: '', message: '' });
  });

  it('author should be invalid before writing', () => {
    const author = component.messageForm.controls.author;
    expect(author.value).toEqual(inputs[0].value);
    expect(author.errors?.['required']).toBeTruthy();
  });

  it('author should be valid after writing', async () => {
    inputs[0].value = 'Erwan Beauchamps';
    inputs[0].dispatchEvent(new Event('input'));
    await fixture.whenStable();

    const author = component.messageForm.controls.author;
    expect(author.value).toEqual('Erwan Beauchamps');
    expect(author.errors).toBeNull();
  });

  it('author should fail firstValidator when too short', async () => {
    inputs[0].value = 'Erwan';
    inputs[0].dispatchEvent(new Event('input'));
    await fixture.whenStable();

    expect(component.messageForm.controls.author.errors?.['firstValidator']).toBe(true);
  });

  it('form should be valid when every field is filled', async () => {
    inputs[0].value = 'Erwan Beauchamps';
    inputs[1].value = 'Message Erwan';
    inputs[0].dispatchEvent(new Event('input'));
    inputs[1].dispatchEvent(new Event('input'));
    await fixture.whenStable();

    expect(component.messageForm.valid).toBe(true);
  });
});
