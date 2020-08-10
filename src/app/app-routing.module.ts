
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RootHomeComponent } from './root-home/root-home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserModule } from './user/user.module';
//mport { LazyRoutingModule } from './lazy/lazy_routing.module';


const routes: Routes = [
  {path: '' , redirectTo:'home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'root',component:RootHomeComponent},
  {path:'auth',loadChildren: () => import('./auth/authentication.module').then(m => m.AuthenticationModule)},
  {path:'user',loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  {path:'lazy',loadChildren: () => import('./lazy/lazy_routing.module').then(m => m.LazyRoutingModule)},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
