import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleService } from '../services/simple-service';
import { FirstComponent } from './first-component';

describe('FirstComponent', () => {
  let component: FirstComponent;
  let fixture: ComponentFixture<FirstComponent>;
  let simpleService: SimpleService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FirstComponent);
    component = fixture.componentInstance;
    simpleService = TestBed.inject(SimpleService);
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

  it('add() should add an element to the service list', () => {
    const size1 = simpleService.list().length;
    component.add();
    component.add();
    component.add();
    expect(simpleService.list().length).toEqual(size1 + 3);
  });

  it('delete() should remove the last element of the service list', () => {
    const size1 = simpleService.list().length;
    component.delete();
    expect(simpleService.list().length).toEqual(size1 - 1);
  });
});
