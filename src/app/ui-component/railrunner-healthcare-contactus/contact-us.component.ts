import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactForm = this.fmb.group({
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
    phone: ['', {
      validators: [
        Validators.required,
        Validators.pattern('[0-9]{10}')
      ]
    }],
    message: ['']
  })

  get name() {
    return this.contactForm.get('name')
  }

  get email() {
    return this.contactForm.get('email')
  }

  get phone() {
    return this.contactForm.get('phone')
  }

  get message() {
    return this.contactForm.get('message')
  }

  send(){
    Swal.fire({
      icon: 'success',
      title: 'success',
      text: 'You have successfully registered'
    })
  }
  constructor(private fmb: FormBuilder) { }

  ngOnInit(): void {

  }

}
