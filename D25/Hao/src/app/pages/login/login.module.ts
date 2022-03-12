import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShareModule} from '../../modules/share/share.module'
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ShareModule
  ]
})
export class LoginModule { }
