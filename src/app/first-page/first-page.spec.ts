import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { firstValueFrom, of } from 'rxjs';

import { Message } from '../services/firebase-api-service';
import { MessagesServerService } from '../services/messages-server-service';
import { FirstPage } from './first-page';

const MESSAGES: Message[] = [
  { author: 'unitTest', message: 'unitMessage' },
  { author: 'unitTest2', message: 'unitMessage2' },
  { author: 'unitTest3', message: 'unitMessage3' },
];

describe('FirstPage', () => {
  let messagesServerService: MessagesServerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FirstPage],
      // Pas de vraie requête HTTP pendant les tests
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    messagesServerService = TestBed.inject(MessagesServerService);
  });

  it('should create', async () => {
    const fixture = TestBed.createComponent(FirstPage);
    await fixture.whenStable();
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('getMessages() spy should return 3 messages', async () => {
    vi.spyOn(messagesServerService, 'getMessages').mockReturnValue(of(MESSAGES));

    const listMessages = await firstValueFrom(messagesServerService.getMessages());

    expect(listMessages.length).toBe(3);
    expect(messagesServerService.getMessages).toHaveBeenCalledTimes(1);
  });

  it('should display one card per message', async () => {
    vi.spyOn(messagesServerService, 'getMessages').mockReturnValue(of(MESSAGES));

    const fixture: ComponentFixture<FirstPage> = TestBed.createComponent(FirstPage);
    await fixture.whenStable();

    expect(fixture.componentInstance.listMessages().length).toBe(3);
    expect(fixture.nativeElement.querySelectorAll('mat-card').length).toBe(3);
  });
});
