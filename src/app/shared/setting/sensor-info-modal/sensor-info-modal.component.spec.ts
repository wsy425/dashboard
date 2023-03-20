import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorInfoModalComponent } from './sensor-info-modal.component';

describe('SensorInfoModalComponent', () => {
  let component: SensorInfoModalComponent;
  let fixture: ComponentFixture<SensorInfoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorInfoModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
