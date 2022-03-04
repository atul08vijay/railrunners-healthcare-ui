import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent implements OnInit {

  send(){
    Swal.fire({
      icon: 'success',
      title: 'success',
      text: 'You have successfully submitted the Feedback..!',
    })

  }
  constructor() { }

  ngOnInit(): void {
  }

}
