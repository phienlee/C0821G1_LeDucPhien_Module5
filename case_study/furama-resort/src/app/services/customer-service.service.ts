import { Injectable } from '@angular/core';
import {ICustomer} from "../customer/icustomer";


@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {

   customers = [
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
  constructor() { }

  getAll(){
     return this.customers;
  }

  addCustomer(customer): void{
    this.customers.push(customer);
  }
}
