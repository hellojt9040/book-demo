import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { FooterComponent } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { SuccessComponent } from './success/success.component';
import { FailureComponent } from './failure/failure.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, SnackbarComponent, SuccessComponent, FailureComponent],
  imports: [
    SharedModule,
    AngularMaterialModule
  ],
  exports:[
    HeaderComponent, FooterComponent
  ]
})
export class CommonResourceModule { }
