import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../icustomer";
import {CustomerServiceService} from "../../services/customer-service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']

})
export class ListComponent implements OnInit {

  customerList: ICustomer[];

  constructor(private customerService: CustomerServiceService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.customerList = this.customerService.getAll();
  }
}
