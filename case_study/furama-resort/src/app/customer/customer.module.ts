import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    declarations: [CustomerComponent, CreateComponent, EditComponent, ListComponent],
    exports: [
        CustomerComponent,
        EditComponent,
        CreateComponent,
        ListComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ]
})
export class CustomerModule { }
