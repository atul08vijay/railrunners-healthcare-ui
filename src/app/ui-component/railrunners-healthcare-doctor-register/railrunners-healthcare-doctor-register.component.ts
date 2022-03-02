import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-railrunners-healthcare-doctor-register',
  templateUrl: './railrunners-healthcare-doctor-register.component.html',
  styleUrls: ['./railrunners-healthcare-doctor-register.component.css']
})
export class RailrunnersHealthcareDoctorRegisterComponent implements OnInit {

  User: any = ['Dr', 'MBBS', 'Orthopedic'];
  constructor() { }

  ngOnInit(): void {
  }

}
