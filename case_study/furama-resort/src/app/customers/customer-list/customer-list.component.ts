import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../../customer/icustomer";
import {CustomerServiceService} from "../../services/customer-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

 checkDelete = false;
 id: number;
 name: string;

  customerList: ICustomer[];

  constructor(private customerService: CustomerServiceService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.customerService.getAll().subscribe(customers => {
      this.customerList = customers;
    })
  }

  passData(id: number, name: string) {
    this.checkDelete = true;
    console.log("id:" + id);
    console.log("name:" + name);
    this.id = id;
    this.name = name;

  }

  delete() {
    this.customerService.deleteCustomer(this.id).subscribe(() => {
      console.log('xóa'+this.id);
      this.getAll();
    })
  }
}
