import { TestBed } from '@angular/core/testing';

import { Welcome } from './welcome';

describe('Welcome', () => {
  let service: Welcome;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Welcome);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
