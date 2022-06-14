import { TestBed } from '@angular/core/testing';

import { HomeEndpoint } from './home.Endpoint';

describe('HomeEndpoint', () => {
  let service: HomeEndpoint;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeEndpoint);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
