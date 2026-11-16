import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPage } from './second-page';

describe('SecondPage', () => {
  let component: SecondPage;
  let fixture: ComponentFixture<SecondPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondPage],
      // Pas de vraie requête HTTP pendant les tests
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(SecondPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
