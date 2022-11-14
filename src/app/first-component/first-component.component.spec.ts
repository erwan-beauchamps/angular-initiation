import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FirstComponentComponent } from './first-component.component';

describe('FirstComponentComponent', () => {
  let component: FirstComponentComponent;
  let fixture: ComponentFixture<FirstComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

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
});
