import { Component, OnInit } from '@angular/core';
import {CustomerServiceService} from "../../services/customer-service.service";
import {Router} from "@angular/router";
import {ICustomer} from "../icustomer";
import Swal from "sweetalert2";


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
    });
  }

  passData(id: number, name: string) {
    this.checkDelete = true;
    this.id = id;
    this.name = name;

  }

  delete() {
    this.customerService.deleteCustomer(this.id).subscribe(() => {
      this.callToast()
      this.getAll();
    })
  }

  callToast() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Delete customer successfully',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
