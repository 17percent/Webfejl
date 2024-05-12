import { TestBed } from '@angular/core/testing';

import { PopupForRedirectService } from './popup-for-redirect.service';

describe('PopupForRedirectService', () => {
  let service: PopupForRedirectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupForRedirectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
