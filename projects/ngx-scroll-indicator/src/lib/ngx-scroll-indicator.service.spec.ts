import { TestBed } from '@angular/core/testing';

import { NgxScrollIndicatorService } from './ngx-scroll-indicator.service';

describe('NgxScrollIndicatorService', () => {
  let service: NgxScrollIndicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxScrollIndicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
