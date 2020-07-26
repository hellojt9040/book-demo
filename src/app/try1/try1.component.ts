import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-try1',
  templateUrl: './try1.component.html',
  styleUrls: ['./try1.component.css']
})
export class Try1Component implements OnInit {
  wid = 500
  customOptions: OwlOptions = {
    margin:20,
    autoplayHoverPause:true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    // navSpeed: 700,
    slideTransition: 'linear',
    autoplay:true,
    autoplayTimeout:5000,
    autoplaySpeed:2000,
    autoWidth:true,
    navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }

  slidesStore = [
    {
      id:1,
      src:'../assets/images/jph_1.jpg',
      alt:'Image_1',
      title:'Image_1',
      description : 'Mathematics 3',
      sem: '3rd sem',
    },
    {
      id:2,
      src:'../assets/images/jph_2.jpg',
      alt:'Image_2',
      title:'Image_3',
      description : 'Physics 3',
      sem: '4th sem',
    },
    {
      id:3,
      src:'../assets/images/jph_3.jpg',
      alt:'Image_3',
      title:'Image_3',
      description : 'Chemistry 3',
      sem: '3rd sem',
    },
    {
      id:4,
      src:'../assets/images/jph_4.jpg',
      alt:'Image_4',
      title:'Image_4',
      description : 'Artificial Inteligence',
      sem: '7th sem',
    },
    {
      id:5,
      src:'../assets/images/jph_5.jpg',
      alt:'Image_5',
      title:'Image_5',
      description : 'Data Stucture',
      sem: '2nd sem',
    },
    {
      id:6,
      src:'../assets/images/jph_6.jpg',
      alt:'Image_6',
      title:'Image_6',
      description : 'c++',
      sem: '3rd sem',
    },
    {
      id:7,
      src:'../assets/images/jph_1.jpg',
      alt:'Image_7',
      title:'Image_7',
      description : 'Core Java',
      sem: '3rd sem',
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
