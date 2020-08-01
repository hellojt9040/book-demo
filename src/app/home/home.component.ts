import { fade } from './../common/animations/animations';
import { Component, OnInit } from '@angular/core';

import {
  bounceInDownOnEnterAnimation,
  slideOutRightOnLeaveAnimation,
  fadeInRightBigAnimation,
} from 'angular-animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    fade,
    bounceInDownOnEnterAnimation(),
    slideOutRightOnLeaveAnimation(),
    fadeInRightBigAnimation()
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
