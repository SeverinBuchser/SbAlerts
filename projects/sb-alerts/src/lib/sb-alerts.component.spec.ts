import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SbAlertsComponent } from './sb-alerts.component';

describe('SbAlertsComponent', () => {
  let component: SbAlertsComponent;
  let fixture: ComponentFixture<SbAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
