import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailrunnersHealthcareLoginComponent } from './railrunners-healthcare-login.component';

describe('RailrunnersHealthcareLoginComponent', () => {
  let component: RailrunnersHealthcareLoginComponent;
  let fixture: ComponentFixture<RailrunnersHealthcareLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RailrunnersHealthcareLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RailrunnersHealthcareLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
