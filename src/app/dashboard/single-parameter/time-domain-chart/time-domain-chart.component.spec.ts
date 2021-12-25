import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeDomainChartComponent } from './time-domain-chart.component';

describe('TimeDomainChartComponent', () => {
  let component: TimeDomainChartComponent;
  let fixture: ComponentFixture<TimeDomainChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeDomainChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeDomainChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
