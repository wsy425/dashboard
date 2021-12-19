import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetModalComponent } from './reset-modal.component';

describe('ResetModalComponent', () => {
  let component: ResetModalComponent;
  let fixture: ComponentFixture<ResetModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResetModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
