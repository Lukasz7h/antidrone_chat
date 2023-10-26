import { TestBed } from '@angular/core/testing';

import { ChatViewService } from './chat-view.service';

describe('ChatViewService', () => {
  let service: ChatViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
