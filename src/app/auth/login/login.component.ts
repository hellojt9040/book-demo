import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide:boolean = true
  flip: boolean = false
  resetMailSent:boolean = false
  isPasswordReset:boolean = false

  loginForm = new FormGroup({
    email : new FormControl('',{
      validators: [
        Validators.required, Validators.email
      ],
      asyncValidators: []} )

  })


  constructor(public dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
  }

  sendResetPwdEmail(){
    //send email....
    //success..
      this.resetMailSent = true
  }

  resetPassword(){
    //reset pwd
    if(1>0){
      this.isPasswordReset = true
      setTimeout(() => {
        this.resetMailSent = false
        this.isPasswordReset = false
        this.toggleFlip()
      },1000)
    }
  }

  /* getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  } */

  toggleFlip(){
    this.flip = !this.flip
  }

}
