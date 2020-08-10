import { bounceInDownOnEnterAnimation } from 'angular-animations';
import { AfterViewInit, Component, OnInit, ViewEncapsulation } from '@angular/core';
import 'jarallax';
declare var jarallax: any;

interface OptionData {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'root-home',
  templateUrl: './root-home.component.html',
  styleUrls: ['./root-home.component.css'],
  animations: [
    bounceInDownOnEnterAnimation(),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class RootHomeComponent implements OnInit, AfterViewInit {
  mobView = false
  sems: OptionData[] = [
    {value: 1, viewValue: 'First'},
    {value: 2, viewValue: 'Second'},
    {value: 3, viewValue: 'Third'},
    {value: 4, viewValue: 'Fourth'},
    {value: 5, viewValue: 'Fifth'},
    {value: 6, viewValue: 'Sixth'},
    {value: 7, viewValue: 'Seventh'},
  ]
  selectedSem = this.sems[2].value

  branchs: OptionData[] = [
    {value: 1, viewValue: 'Mechanical'},
    {value: 2, viewValue: 'EC'},
    {value: 3, viewValue: 'Civil'},
    {value: 4, viewValue: 'CSE'},
    {value: 5, viewValue: 'Electruical'},
    {value: 6, viewValue: 'Production'},
    {value: 7, viewValue: 'Chemical'},
  ]
  selectedBranch = this.branchs[3].value

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

}
