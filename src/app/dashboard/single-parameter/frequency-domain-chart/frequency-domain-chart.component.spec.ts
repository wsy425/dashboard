import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencyDomainChartComponent } from './frequency-domain-chart.component';

describe('FrequencyDomainChartComponent', () => {
  let component: FrequencyDomainChartComponent;
  let fixture: ComponentFixture<FrequencyDomainChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencyDomainChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencyDomainChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
