import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';



@NgModule({
    declarations: [EditComponent, ListComponent, CreateComponent],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class ServiceModule { }
