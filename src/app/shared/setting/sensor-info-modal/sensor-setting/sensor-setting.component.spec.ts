import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorSettingComponent } from './sensor-setting.component';

describe('SensorSettingComponent', () => {
  let component: SensorSettingComponent;
  let fixture: ComponentFixture<SensorSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SensorSettingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
