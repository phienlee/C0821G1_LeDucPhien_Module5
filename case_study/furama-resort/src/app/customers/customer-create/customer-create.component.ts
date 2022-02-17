import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerServiceService} from "../../services/customer-service.service";
import {Router, RouterModule} from "@angular/router";
import Swal from 'sweetalert2';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

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

  constructor(private customerService: CustomerServiceService,
              private router: Router) {

  }

  ngOnInit(): void {
  }

  onSubmit(){
    const customer = this.customerForm.value;
    this.customerService.addCustomer(customer).subscribe(value => {
      this.callToast();
      this.router.navigate(['/customers/list']);
    });
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

  callToast(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Add customer successfully',
      showConfirmButton: false,
      timer: 1500
    })
  }

}
