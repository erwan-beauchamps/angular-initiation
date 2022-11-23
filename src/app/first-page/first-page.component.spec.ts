import { MessagesServerService } from './../services/messages-server.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, fakeAsync, flush, inject, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { of } from 'rxjs';
import { FirstPageComponent } from './first-page.component';
import { Message } from '../services/firebase-api.service';

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

  it('messages spyOn', waitForAsync(() => {

    let listMessages!: Message[];
    
    spyOn(messagesServerService, 'getMessages').and.returnValue(of([
      {
        author: 'unitTest',
        message: 'unitMessage'
      },
      {
        author: 'unitTest2',
        message: 'unitMessage2'
      },
      {
        author: 'unitTest3',
        message: 'unitMessage3'
      }
    ]));

    messagesServerService.getMessages().subscribe(result => {
      listMessages = result;
      expect(listMessages.length).toBe(3);
    });

  }));

});

