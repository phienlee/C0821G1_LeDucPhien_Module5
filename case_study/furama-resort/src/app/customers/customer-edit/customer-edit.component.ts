import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CustomerServiceService} from "../../services/customer-service.service";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  editCustomerForm: FormGroup;
  id: number;

  constructor(private activatedRoute: ActivatedRoute,
              private customerService: CustomerServiceService,
              private router: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
     const customer =this.getCustomer(this.id);
    })
  }


  ngOnInit(): void {
  }

  getCustomer(id: number){
    return this.customerService.findById(id).subscribe(customer =>{
      this.editCustomerForm = new FormGroup({
        name: new FormControl(customer.name, [Validators.required, Validators.pattern('^[A-Za-z ]+$')]),
        birthday: new FormControl(customer.birthday, [Validators.required]),
        gender: new FormControl(customer.gender, [Validators.required]),
        phoneNumber: new FormControl(customer.phoneNumber, [Validators.required, Validators.maxLength(11), Validators.minLength(10)
          , Validators.pattern('^[0-9]+$')]),
        email: new FormControl(customer.email, [Validators.email]),
        address: new FormControl(customer.address, [Validators.required, Validators.maxLength(256)]),
        customerType: new FormControl(customer.customerType, [Validators.required])
      })
    })
  }

  updateCustomer(id: number){
    const customer = this.editCustomerForm.value;
    this.customerService.updateCustomer(id, customer).subscribe(() =>{
      console.log("Cap nhat thanh cong")
      this.router.navigate(['/customers/list']);
    });
  }

  get name() {
    return this.editCustomerForm.get('name');
  }

  get birthday() {
    return this.editCustomerForm.get('birthday');
  }

  get gender() {
    return this.editCustomerForm.get('gender');
  }

  get phoneNumber() {
    return this.editCustomerForm.get('phoneNumber');
  }

  get email() {
    return this.editCustomerForm.get('email');
  }

  get address() {
    return this.editCustomerForm.get('address');
  }

  get customerType() {
    return this.editCustomerForm.get('customerType');
  }

}
