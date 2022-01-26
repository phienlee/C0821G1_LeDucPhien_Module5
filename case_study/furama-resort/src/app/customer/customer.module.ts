import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';



@NgModule({
    declarations: [CustomerComponent, CreateComponent, EditComponent],
  exports: [
    CustomerComponent,
    EditComponent,
    CreateComponent
  ],
    imports: [
        CommonModule
    ]
})
export class CustomerModule { }
