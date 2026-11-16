import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponent } from './first-component';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isShowed should be false', () => {
    component.isShowed.set(true);
    component.display();
    expect(component.isShowed()).toBe(false);
  });

  it('switchValue should be testValue', () => {
    const testValue = 'testValue';
    component.changeSwitchValue(testValue);
    expect(component.switchValue()).toEqual(testValue);
  });

  it('isShowed should be true', () => {
    component.isShowed.set(false);
    component.display();
    expect(component.isShowed()).toBe(true);
  });
});
