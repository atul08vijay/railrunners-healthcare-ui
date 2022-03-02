import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RailrunnersHealthcareLoginComponent} from './ui-component/railrunners-healthcare-login/railrunners-healthcare-login.component';
import { RailrunnersHealthcarePatientRegisterComponent } from './ui-component/railrunners-healthcare-patient-register/railrunners-healthcare-patient-register.component';
import { RailrunnersHealthcareDoctorRegisterComponent } from './ui-component/railrunners-healthcare-doctor-register/railrunners-healthcare-doctor-register.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: RailrunnersHealthcareLoginComponent },
  { path: 'registerPatient', component: RailrunnersHealthcarePatientRegisterComponent },
  { path: 'registerDoctor', component: RailrunnersHealthcareDoctorRegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
