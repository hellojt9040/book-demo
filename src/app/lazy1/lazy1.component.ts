import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lazy1',
  templateUrl: './lazy1.component.html',
  styleUrls: ['./lazy1.component.css']
})
export class Lazy1Component implements OnInit {
  flip = false
  constructor() { }

  ngOnInit(): void {
  }

  toggleFlip(){
    this.flip = !this.flip
  }

}
