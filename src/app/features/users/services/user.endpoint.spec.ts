import { TestBed } from '@angular/core/testing';

import { UserEndpoint } from './user.endpoint';

describe('UserEndpoint', () => {
  let service: UserEndpoint;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEndpoint);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
