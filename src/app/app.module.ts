import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RailrunnersHealthcareLoginComponent } from './ui-component/railrunners-healthcare-login/railrunners-healthcare-login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RailrunnersHealthcarePatientRegisterComponent } from './ui-component/railrunners-healthcare-patient-register/railrunners-healthcare-patient-register.component';
import { RailrunnersHealthcareDoctorRegisterComponent } from './ui-component/railrunners-healthcare-doctor-register/railrunners-healthcare-doctor-register.component';

 

@NgModule({
  declarations: [
    AppComponent,
    RailrunnersHealthcareLoginComponent,
    RailrunnersHealthcarePatientRegisterComponent,
    RailrunnersHealthcareDoctorRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
