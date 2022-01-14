import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataSendingModalComponent } from './data-sending-modal.component';

describe('DataSendingModalComponent', () => {
  let component: DataSendingModalComponent;
  let fixture: ComponentFixture<DataSendingModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataSendingModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataSendingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
