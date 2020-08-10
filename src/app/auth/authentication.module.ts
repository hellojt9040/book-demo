import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    SharedModule,
    AngularMaterialModule,
    AuthRoutingModule,
  ],
})
export class AuthenticationModule { }
