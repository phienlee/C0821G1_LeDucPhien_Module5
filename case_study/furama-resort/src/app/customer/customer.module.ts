import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from "@angular/forms";
import { CustomerListComponent } from './customer-list/customer-list.component';



@NgModule({
    declarations: [CustomerComponent, EditComponent, ListComponent, CustomerListComponent],
    exports: [
        CustomerComponent,
        EditComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class CustomerModule { }
