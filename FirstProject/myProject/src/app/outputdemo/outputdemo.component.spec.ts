import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputdemoComponent } from './outputdemo.component';

describe('OutputdemoComponent', () => {
  let component: OutputdemoComponent;
  let fixture: ComponentFixture<OutputdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
