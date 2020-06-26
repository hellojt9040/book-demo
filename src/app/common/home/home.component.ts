import { Component, OnInit } from '@angular/core';
import { fade } from '../animations/animations';
import {
  bounceInDownOnEnterAnimation,
  slideOutRightOnLeaveAnimation,
} from 'angular-animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fade,
    bounceInDownOnEnterAnimation(),
    slideOutRightOnLeaveAnimation()
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
