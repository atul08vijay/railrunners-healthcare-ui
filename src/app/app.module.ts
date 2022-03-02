import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RailrunnersHealthcareLoginComponent } from './ui-component/railrunners-healthcare-login/railrunners-healthcare-login.component';

@NgModule({
  declarations: [
    AppComponent,
    RailrunnersHealthcareLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
