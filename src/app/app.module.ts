import { AngularMaterialModule } from './angular-material/angular-material.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootHomeComponent } from './common/root-home/root-home.component';
import { TryComponent } from './try/try.component';
import { Try1Component } from './try1/try1.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RootHomeComponent,
    TryComponent,
    Try1Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //angular material module
    AngularMaterialModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
