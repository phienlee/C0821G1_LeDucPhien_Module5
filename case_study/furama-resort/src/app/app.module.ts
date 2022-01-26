import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import {HeaderModule} from "./header/header.module";
import {CustomerModule} from "./customer/customer.module";
import { ListContractComponent } from './contract/list-contract/list-contract.component';
import { NewContractComponent } from './contract/new-contract/new-contract.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListContractComponent,
    NewContractComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    CustomerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
