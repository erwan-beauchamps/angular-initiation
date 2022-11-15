import { MessagesServerService } from './../services/messages-server.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, inject, TestBed, tick, waitForAsync } from '@angular/core/testing';

import { FirstPageComponent } from './first-page.component';

describe('FirstPageComponent', () => {
  let component: FirstPageComponent;
  let fixture: ComponentFixture<FirstPageComponent>;
  let messagesServerService: MessagesServerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstPageComponent ],
      imports: [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(inject([MessagesServerService], (_messagesServerService: MessagesServerService) => messagesServerService = _messagesServerService));


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('messages should not be empty', waitForAsync(() => {
    let messages = null;
    messagesServerService.getMessages().subscribe(data => {
      messages = data;
      expect(messages).not.toBeNull();
    });
  }));

});

