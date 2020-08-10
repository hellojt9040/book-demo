import { NgModule } from '@angular/core';
import { CartComponent } from './cart/cart.component';
import { SharedModule } from '../shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { CommonResourceModule } from '../common/common-resource.module';
import { AngularMaterialModule } from './../angular-material/angular-material.module';



@NgModule({
  declarations: [CartComponent],
  imports: [
    SharedModule,
    CommonResourceModule,
    AngularMaterialModule,
    UserRoutingModule
  ]
})
export class UserModule { }
