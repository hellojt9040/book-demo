import { RootHomeComponent } from './common/root-home/root-home.component';
import { HomeComponent } from './common/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '' , redirectTo: 'home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'root',component:RootHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
