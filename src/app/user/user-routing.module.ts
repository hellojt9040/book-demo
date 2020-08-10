
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  //{ path: '' , redirectTo:'signup',pathMatch: 'full' },
  //{ path: 'login', component: LoginComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
