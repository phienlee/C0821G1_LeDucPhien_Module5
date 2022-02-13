import { Component, OnInit } from '@angular/core';
import {ICustomer} from "../icustomer";

const CUSTOMERS: ICustomer[] = [
  {
    name: 'Le Duc Phien',
    birthday: '09-09-1999',
    phoneNumber: '0909090909',
    email: 'phienle@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },

  {
    name: 'Nguyen Van A',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'a@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },

  {
    name: 'Nguyen Van B',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'b@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },

  {
    name: 'Nguyen Van C',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'c@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },

  {
    name: 'Nguyen Van D',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'd@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },
  {
    name: 'Nguyen Van E',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'e@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },

  {
    name: 'Nguyen Van F',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'f@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  },
  {
    name: 'Nguyen Van G',
    birthday: '09-09-1992',
    phoneNumber: '0909090909',
    email: 'g@gmail.com',
    address: 'Da Nang',
    customerType: 'Diamond'
  }
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']

})
export class ListComponent implements OnInit {

  customerList: ICustomer[];

  constructor() {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(){
    this.customerList = CUSTOMERS;
  }
}
