import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-new-contract',
  templateUrl: './new-contract.component.html',
  styleUrls: ['./new-contract.component.css']
})
export class NewContractComponent implements OnInit {

  contractForm: FormGroup = new FormGroup({
    customer: new FormControl('', [Validators.required, Validators.pattern('^[]+$')]),
    dateStarted: new FormControl('',[Validators.required])
  });

  constructor() {

  }

  ngOnInit(): void {
  }

  get customer() {
    return this.contractForm.get('customer');
  }

  get dateEnd() {
    return this.contractForm.get('dateEnd');
  }

  get dateStarted() {
    return this.contractForm.get('dateStarted');
  }

  get downPayment() {
    return this.contractForm.get('downPayment');
  }

  get totalPayment() {
    return this.contractForm.get('totalPayment');
  }


}
