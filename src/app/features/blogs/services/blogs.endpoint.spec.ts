import { TestBed } from '@angular/core/testing';

import { BlogsEndpoint } from './blogs.endpoint';

describe('BlogsEndpoint', () => {
  let service: BlogsEndpoint;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsEndpoint);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});