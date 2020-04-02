import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveCreateFormComponent } from './reactive-create-form.component';

describe('ReactiveCreateFormComponent', () => {
  let component: ReactiveCreateFormComponent;
  let fixture: ComponentFixture<ReactiveCreateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveCreateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
