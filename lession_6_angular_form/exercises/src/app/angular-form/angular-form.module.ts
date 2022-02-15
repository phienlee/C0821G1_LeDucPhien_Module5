import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import { MyRegisterPageComponent } from './my-register-page/my-register-page.component';



@NgModule({
    declarations: [LoginComponent, MyRegisterPageComponent],
    exports: [
        LoginComponent,
        MyRegisterPageComponent
    ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class AngularFormModule { }
