import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailrunnersHealthcareDoctorRegisterComponent } from './railrunners-healthcare-doctor-register.component';

describe('RailrunnersHealthcareDoctorRegisterComponent', () => {
  let component: RailrunnersHealthcareDoctorRegisterComponent;
  let fixture: ComponentFixture<RailrunnersHealthcareDoctorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RailrunnersHealthcareDoctorRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RailrunnersHealthcareDoctorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
