import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Routing
import { AuthRoutingModule } from './auth-routing.module';
//Components
import { SignComponent } from './pages/sign/sign.component';


@NgModule({
  declarations: [
    SignComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
