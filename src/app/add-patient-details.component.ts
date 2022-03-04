import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-patient-details',
  templateUrl: './add-patient-details.component.html',
  styleUrls: ['./add-patient-details.component.css']
})
export class AddPatientDetailsComponent implements OnInit {
 addPatient = this.fmb.group({
    name: ['', {
      validators: [
        Validators.required,
        Validators.pattern('[a-zA-Z]+')
      ]
    }],
    email: ['', {
      validators: [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$')
      ]
    }],
    padd: ['', {
      validators: [
        Validators.required,
        
      ]
    }]
  })



  get name() {
    return this.addPatient.get('name')
  }
get padd(){
  return this.addPatient.get('padd')
}
  get email() {
    return this.addPatient.get('email')
  }

add(){
  alert('Added')
 }
  constructor(private fmb: FormBuilder) {}
  
  ngOnInit(): void {}


}
