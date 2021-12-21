import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbnormalParametersComponent } from './abnormal-parameters.component';

describe('AbnormalParametersComponent', () => {
  let component: AbnormalParametersComponent;
  let fixture: ComponentFixture<AbnormalParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbnormalParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbnormalParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
