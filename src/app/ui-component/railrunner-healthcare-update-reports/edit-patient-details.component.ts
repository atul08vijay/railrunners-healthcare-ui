import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-patient-details',
  templateUrl: './edit-patient-details.component.html',
  styleUrls: ['./edit-patient-details.component.css']
})
export class EditPatientDetailsComponent implements OnInit {
  Update(){
    alert('updated')
   }
   
  constructor() { }

  ngOnInit(): void {
  }

}
