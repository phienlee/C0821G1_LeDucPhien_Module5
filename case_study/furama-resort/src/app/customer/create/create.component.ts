import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../services/customer-service.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  customerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
    birthday: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required, Validators.maxLength(11), Validators.minLength(10)
      , Validators.pattern('^[0-9]+$')]),
    email: new FormControl('', [Validators.email]),
    address: new FormControl('', [Validators.required, Validators.maxLength(256)]),
    customerType: new FormControl('', [Validators.required])
  })

  constructor(private customerService: CustomerServiceService) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    const customer = this.customerForm.value;
    this.customerService.addCustomer(customer);
    console.log(this.customerService.getAll())
  }

  get name() {
    return this.customerForm.get('name');
  }

  get birthday() {
    return this.customerForm.get('birthday');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get phoneNumber() {
    return this.customerForm.get('phoneNumber');
  }

  get email() {
    return this.customerForm.get('email');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }


}
