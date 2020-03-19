import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputdemoComponent } from './inputdemo.component';

describe('InputdemoComponent', () => {
  let component: InputdemoComponent;
  let fixture: ComponentFixture<InputdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
