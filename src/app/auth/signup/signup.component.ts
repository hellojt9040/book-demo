import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SignupComponent implements OnInit {
  hide:boolean = true

  signupForm = new FormGroup({
    email : new FormControl('',{
      validators: [
        Validators.required, Validators.email
      ],
      asyncValidators: []} )

  })

  constructor() { }

  ngOnInit(): void {
  }

}
