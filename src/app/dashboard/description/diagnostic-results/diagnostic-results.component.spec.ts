import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosticResultsComponent } from './diagnostic-results.component';

describe('DiagnosticResultsComponent', () => {
  let component: DiagnosticResultsComponent;
  let fixture: ComponentFixture<DiagnosticResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiagnosticResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosticResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
