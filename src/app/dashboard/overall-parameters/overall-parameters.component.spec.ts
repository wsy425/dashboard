import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallParametersComponent } from './overall-parameters.component';

describe('OverallParametersComponent', () => {
  let component: OverallParametersComponent;
  let fixture: ComponentFixture<OverallParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverallParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
