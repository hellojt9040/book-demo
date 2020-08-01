import { AfterViewInit, Component, OnInit } from '@angular/core';
import 'jarallax';
import { fadeInDownAnimation, bounceInDownOnEnterAnimation } from 'angular-animations';
declare var jarallax: any;

@Component({
  selector: 'root-home',
  templateUrl: './root-home.component.html',
  styleUrls: ['./root-home.component.css'],
  animations: [
    bounceInDownOnEnterAnimation(),
  ]
})
export class RootHomeComponent implements OnInit, AfterViewInit {
  mobView = false

  constructor() { }

  ngOnInit(){
    var x = window.matchMedia("(min-width: 576px)")
    this.myFunction(x) // Call listener function at run time
    x.addListener(this.myFunction) // Attach listener function on state changes
  }

  ngAfterViewInit() {
    jarallax(document.querySelectorAll('.jarallax'), {
      speed: 0.2
    });
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
