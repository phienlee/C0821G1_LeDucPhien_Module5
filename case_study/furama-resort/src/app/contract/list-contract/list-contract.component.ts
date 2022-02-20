import {Component, OnInit} from '@angular/core';
import {IContract} from "../icontract";

const CONTRACTS = [
  {
    customer: {
      name: 'Le Duc Phien',
      birthday: '09-09-1999',
      phoneNumber: '0909090909',
      email: 'phienle@gmail.com',
      address: 'Da Nang',
      customerType: 'Diamond'
    },
    facility: {
      name: 'Villa 9.1',
      area: 900,
      noOfFloors: 8,
      capacity: 10,
      rentalFee: 1000,
      rentalType: 'Day',
      status: 'available'
    },
    dateStarted: '14-02-2022',
    dateEnd: '13-02-2022',
    downPayment: 1000,
    totalPayment: 2000
  },

  {
    customer: {
      name: 'Nguyen Van A',
      birthday: '09-09-1992',
      phoneNumber: '0909090909',
      email: 'a@gmail.com',
      address: 'Da Nang',
      customerType: 'Diamond'
    },
    facility: {
      name: 'Villa 9.2',
      area: 900,
      noOfFloors: 8,
      capacity: 10,
      rentalFee: 1000,
      rentalType: 'Day',
      status: 'available'
    },
    dateStarted: '14-02-2022',
    dateEnd: '13-02-2022',
    downPayment: 1000,
    totalPayment: 3000
  }
];

@Component({
  selector: 'app-list-contract',
  templateUrl: './list-contract.component.html',
  styleUrls: ['./list-contract.component.css']
})
export class ListContractComponent implements OnInit {

  contractList: IContract[];

  constructor() {
  }

  ngOnInit(): void {

  }

}
