import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBlogsContainer } from './main-blogs.container';

describe('MainBlogsContainer', () => {
  let component: MainBlogsContainer;
  let fixture: ComponentFixture<MainBlogsContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBlogsContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBlogsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});