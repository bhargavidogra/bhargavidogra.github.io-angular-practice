import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveUpdateFormComponentComponent } from './reactive-update-form-component.component';

describe('ReactiveUpdateFormComponentComponent', () => {
  let component: ReactiveUpdateFormComponentComponent;
  let fixture: ComponentFixture<ReactiveUpdateFormComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveUpdateFormComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveUpdateFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
