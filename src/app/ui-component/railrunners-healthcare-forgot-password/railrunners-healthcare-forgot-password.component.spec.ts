import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RailrunnersHealthcareForgotPasswordComponent } from './railrunners-healthcare-forgot-password.component';

describe('RailrunnersHealthcareForgotPasswordComponent', () => {
  let component: RailrunnersHealthcareForgotPasswordComponent;
  let fixture: ComponentFixture<RailrunnersHealthcareForgotPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RailrunnersHealthcareForgotPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RailrunnersHealthcareForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
