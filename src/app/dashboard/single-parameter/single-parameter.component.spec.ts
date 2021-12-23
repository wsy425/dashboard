import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleParameterComponent } from './single-parameter.component';

describe('SingleParameterComponent', () => {
  let component: SingleParameterComponent;
  let fixture: ComponentFixture<SingleParameterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleParameterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleParameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
