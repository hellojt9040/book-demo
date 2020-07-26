/* import {
  ElementRef,
  OnInit, OnDestroy, ChangeDetectorRef, Injectable
} from '@angular/core';
import {Observable, fromEvent} from 'rxjs';
import {Subscription} from 'rxjs';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/operator/startWith';

@Injectable()
export class AppearOnce implements OnInit, OnDestroy {
  appearedOnce: boolean;

  elementPos: number;
  elementHeight: number;

  scrollPos: number;
  windowHeight: number;

  subscriptionScroll: Subscription;
  subscriptionResize: Subscription;

  constructor(private element: ElementRef, private cdRef: ChangeDetectorRef){}

  onResize() {
    this.elementPos = this.getOffsetTop(this.element.nativeElement);
    this.elementHeight = this.element.nativeElement.clientHeight;
    this.checkVisibility();
  }
  onScroll() {
    this.scrollPos = window.scrollY;
    this.windowHeight = window.innerHeight;
    this.checkVisibility();
  }
  getOffsetTop(element: any){
    let offsetTop = element.offsetTop || 0;
    if(element.offsetParent){
      offsetTop += this.getOffsetTop(element.offsetParent);
    }
    return offsetTop;
  }

  checkVisibility(){
    if(!this.appearedOnce){
      if(this.scrollPos >= this.elementPos || (this.scrollPos + this.windowHeight) >= (this.elementPos + this.elementHeight)){
        this.appearedOnce = true;
        this.unsubscribe();
        this.cdRef.detectChanges();
      }
    }
  }

  subscribe(){
    this.subscriptionScroll = fromEvent(window, 'scroll').startWith(null)
      .subscribe(() => this.onScroll());
    this.subscriptionResize = fromEvent(window, 'resize').startWith(null)
      .subscribe(() => this.onResize());
  }
  unsubscribe(){
    if(this.subscriptionScroll){
      this.subscriptionScroll.unsubscribe();
    }
    if(this.subscriptionResize){
      this.subscriptionResize.unsubscribe();
    }
  }

  ngOnInit(){
    this.subscribe();
  }
  ngOnDestroy(){
    this.unsubscribe();
  }
}
 */
