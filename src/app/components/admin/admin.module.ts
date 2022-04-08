import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Routing
import { AdminRoutingModule } from './admin-routing.module';
//Pages
import { HomeComponent } from './pages/home/home.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HomeComponent
  ]
})
export class AdminModule { }
