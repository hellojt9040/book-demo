import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TryComponent } from './try/try.component';
import { Try1Component } from './try1/try1.component';
import { HomeComponent } from './home/home.component';
import { RootHomeComponent } from './root-home/root-home.component';
import { CommonResourceModule } from './common/common-resource.module';
import { NotFoundComponent } from './not-found/not-found.component';
//import { LazyModule } from './lazy/lazy.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RootHomeComponent,
    NotFoundComponent,
    TryComponent,
    Try1Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    //custom modules
    CommonResourceModule,
    AppRoutingModule,


    //external module
    AngularMaterialModule,
    CarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
