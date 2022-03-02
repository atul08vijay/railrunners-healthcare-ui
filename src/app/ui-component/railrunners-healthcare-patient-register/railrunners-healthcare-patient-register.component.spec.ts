import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailrunnersHealthcarePatientRegisterComponent } from './railrunners-healthcare-patient-register.component';

describe('RailrunnersHealthcarePatientRegisterComponent', () => {
  let component: RailrunnersHealthcarePatientRegisterComponent;
  let fixture: ComponentFixture<RailrunnersHealthcarePatientRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RailrunnersHealthcarePatientRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RailrunnersHealthcarePatientRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
