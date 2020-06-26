import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'root-home',
  templateUrl: './root-home.component.html',
  styleUrls: ['./root-home.component.css']
})
export class RootHomeComponent implements OnInit {
  hideNavigation = false

  constructor() { }

  ngOnInit(){
    var x = window.matchMedia("(min-width: 700px)")
    this.myFunction(x) // Call listener function at run time
    x.addListener(this.myFunction) // Attach listener function on state changes
  }

  myFunction(x) {
    if (x.matches) { // If media query matches
      this.hideNavigation = false

    } else {
      this.hideNavigation = true
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
