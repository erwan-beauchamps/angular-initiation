import { TestBed } from '@angular/core/testing';

import { MessagesServerService } from './messages-server-service';

describe('MessagesServerService', () => {
  let service: MessagesServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessagesServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
