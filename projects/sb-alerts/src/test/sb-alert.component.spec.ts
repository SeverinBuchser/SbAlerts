import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SbAlertComponent } from '../public-api';


describe('SbAlertComponent', () => {
  let component: SbAlertComponent;
  let fixture: ComponentFixture<SbAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SbAlertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SbAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
