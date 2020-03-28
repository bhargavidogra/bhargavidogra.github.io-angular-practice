import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyLoadingUserComponent } from './lazy-loading-user.component';

describe('LazyLoadingUserComponent', () => {
  let component: LazyLoadingUserComponent;
  let fixture: ComponentFixture<LazyLoadingUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LazyLoadingUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyLoadingUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
