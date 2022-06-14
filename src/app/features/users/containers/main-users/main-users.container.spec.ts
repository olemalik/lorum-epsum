import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUsersContainer } from './main-users.container';

describe('MainUsersContainer', () => {
  let component: MainUsersContainer;
  let fixture: ComponentFixture<MainUsersContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainUsersContainer ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainUsersContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
