import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Lazy1Component } from '../lazy1/lazy1.component';
import { Lazy2Component } from '../lazy2/lazy2.component';
import { LazyRoutingModule } from './lazy_routing.module';



@NgModule({
  declarations: [Lazy1Component, Lazy2Component],
  imports: [
    CommonModule,
    LazyRoutingModule
  ]
})
export class LazyModule { }
