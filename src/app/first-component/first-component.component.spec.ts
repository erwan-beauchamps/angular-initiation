import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { SimpleServiceService } from '../services/simple-service.service';
import { FirstComponentComponent } from './first-component.component';

describe('FirstComponentComponent', () => {
  let component: FirstComponentComponent;
  let fixture: ComponentFixture<FirstComponentComponent>;
  let simpleServiceService: SimpleServiceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([SimpleServiceService], (_simpleServiceService: SimpleServiceService) => simpleServiceService = _simpleServiceService));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('isShowed should be false', () => {
    component.isShowed = true;
    component.display();
    expect(component.isShowed).toBeFalse();
  });

  it('switchValue should be testValue', () => {
    let testValue = "testValue";
    component.changeSwitchValue(testValue);
    expect(component.switchValue).toEqual(testValue);
  });

  it('isShowed should be true', () => {
    component.isShowed = false;
    component.display();
    expect(component.isShowed).toBeTrue();
  });

  it('messageList add() should work', fakeAsync(() => {
    let size1 = simpleServiceService.getList().length;
    component.add();
    component.add();
    component.add();
    let size2 = simpleServiceService.getList().length;
    expect(size2).toEqual(size1+3);
  }));

  it('messageList delete() should work', fakeAsync(() => {
    let size1 = simpleServiceService.getList().length;
    component.delete();
    let size2 = simpleServiceService.getList().length;
    expect(size2).toEqual(size1-1);
  }));
});
