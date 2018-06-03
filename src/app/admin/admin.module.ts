import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent
],
bootstrap: [LoginComponent]

})
export class AdminModule { }
