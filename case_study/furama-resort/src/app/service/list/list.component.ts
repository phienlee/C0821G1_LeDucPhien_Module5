import { Component, OnInit } from '@angular/core';
import {IFacility} from "../IFacility";
  const FACILITIES = [
      {
        name: 'Villa 9.1',
        area: 900,
        noOfFloors: 8,
        capacity: 10,
        rentalFee: 1000,
        rentalType: 'Day',
        status: 'available'
      },

      {
        name: 'Villa 9.2',
        area: 900,
        noOfFloors: 8,
        capacity: 10,
        rentalFee: 1000,
        rentalType: 'Day',
        status: 'available'
      },

      {
        name: 'Villa 9.3',
        area: 900,
        noOfFloors: 8,
        capacity: 10,
        rentalFee: 1000,
        rentalType: 'Day',
        status: 'available'
      },

      {
        name: 'Villa 9.4',
        area: 900,
        noOfFloors: 8,
        capacity: 10,
        rentalFee: 1000,
        rentalType: 'Day',
        status: 'available'
      },

      {
        name: 'Villa 9.5',
        area: 900,
        noOfFloors: 8,
        capacity: 10,
        rentalFee: 1000,
        rentalType: 'Day',
        status: 'available'
      },
      {
        name: 'Villa 9.6',
        area: 900,
        noOfFloors: 8,
        capacity: 10,
        rentalFee: 1000,
        rentalType: 'Day',
        status: 'available'
      },

      {
        name: 'Villa 9.7',
        area: 900,
        noOfFloors: 8,
        capacity: 10,
        rentalFee: 1000,
        rentalType: 'Day',
        status: 'available'
      },

      {
        name: 'Villa 9.8',
        area: 900,
        noOfFloors: 8,
        capacity: 10,
        rentalFee: 1000,
        rentalType: 'Day',
        status: 'available'
      }
  ];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  facilityList: IFacility[];

  constructor() {
    this.getAll();
  }

  ngOnInit(): void {
  }

  getAll(){
    this.facilityList = FACILITIES;
  }

}
