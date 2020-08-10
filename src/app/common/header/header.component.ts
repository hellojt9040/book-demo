import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/auth/login/login.component';

@Component({
  selector: 'book-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  mobView:boolean
  userLoggedIn:boolean = false
  loginModalConfig:any = {
    height: '30rem',
    width: '50rem',
    panelClass: 'myClass',
    hasBackdrop:true
  }

  constructor(public dialog: MatDialog) { }

  ngOnInit(){
    var x = window.matchMedia("(min-width: 576px)")
    this.myFunction(x) // Call listener function at run time
    x.addListener(this.myFunction) // Attach listener function on state changes

    this.checkProfile()
  }

  //TODO:
  checkProfile(){
    // chk for loggedin

    if(1>0) //if loggedin
      this.userLoggedIn = true
  }

  openLoginModal(){
    /* if(this.userLoggedIn)
      return */

    if(this.mobView){
      this.loginModalConfig = {
        height: 'auto',
        width: '20rem',
        panelClass: 'myClass',
        hasBackdrop:true
      }
    }

      const dialogRef = this.dialog.open(LoginComponent,this.loginModalConfig)
      this.closeNav()
  }

  myFunction(x) {
    if (x.matches) { // If media query matches
      this.mobView = false
      console.log('not mob');


    } else {
      console.log('mob');
      this.mobView = true
    }
  }

  openNav() {
    document.getElementById("mySidenav").style.width = "250px"
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
  }

  closeNav() {
    document.getElementById("mySidenav").style.width = "0"
    document.body.style.backgroundColor = "white"
  }

}
