import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  customerForm: FormGroup;



  constructor() { }

  ngOnInit(): void {
  }

  findById(id: number){
  }

}
