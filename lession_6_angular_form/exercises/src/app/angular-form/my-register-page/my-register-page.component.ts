import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Password, User} from '../user';

class Country {
  id: number;
  name: string;
}

@Component({
  selector: 'app-my-register-page',
  templateUrl: './my-register-page.component.html',
  styleUrls: ['./my-register-page.component.css']
})
export class MyRegisterPageComponent implements OnInit {
  userToSave: User;
  registrationForm: FormGroup;
  users: User[] = [
    {
      userId: '000001',
      email: 'baonguyen@gmail.com',
      name: 'Bao Nguyen',
      passwords: {
        password: '1234567',
        passwordConfirmation: '1234567'
      },
      country: 'China',
      age: 28,
      gender: 'male',
      phone: '0123456789'
    },

    {
      userId: '000002',
      email: 'phienle@gmail.com',
      name: 'Phien Le',
      passwords: {
        password: '1234567',
        passwordConfirmation: '1234567'
      },
      country: 'Japan',
      age: 23,
      gender: 'male',
      phone: '0123456789'
    },

    {
      userId: '000003',
      email: 'duynguyen@gmail.com',
      name: 'Duy Nguyen',
      passwords: {
        password: '1234567',
        passwordConfirmation: '1234567'
      },
      country: 'UAE',
      age: 24,
      gender: 'male',
      phone: '0123456789'
    },
    {
      userId: '000004',
      email: 'congnguyen@gmail.com',
      name: 'Vy Tran',
      passwords: {
        password: '1234567',
        passwordConfirmation: '1234567'
      },
      country: 'England',
      age: 27,
      gender: 'female',
      phone: '0123456789'
    },
  ];

  countryList: Country[] = [
    {id: 1, name: 'Viet Nam'},
    {id: 2, name: 'Japan'},
    {id: 3, name: 'England'},
    {id: 4, name: 'UAE'},
    {id: 5, name: 'Korea'},
    {id: 6, name: 'USa'},
    {id: 7, name: 'China'},
    {id: 8, name: 'Brasil'},
  ];

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registrationForm = this.fb.group({
      userId: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(50)])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(50),
        Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)])],
      name: ['', Validators.compose([Validators.required, Validators.minLength(2), Validators.maxLength(100)])],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(12)])],
      country: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      age: ['', Validators.compose([Validators.required, Validators.min(18), Validators.max(60), Validators.pattern('[0-9]*')])],
      passwords: this.fb.group({
          password: ['', [Validators.required, Validators.maxLength(30), Validators.minLength(6)]],
          passwordConfirmation: ''
        },
        {validator: this.checkPasswords})
    });
  }

  checkPasswords(group: FormGroup) {
    const password = group.get('password') as FormControl;
    const confirmPassword = group.get('passwordConfirmation') as FormControl;
    return password.value === confirmPassword.value ? null : {mismatch: true};
  }

  onSubmit() {
    this.users.push(this.registrationForm.value);
    console.log(this.registrationForm.value);
    alert('Phien Le');
  }

  get userId() {
    return this.registrationForm.get('userId');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get name() {
    return this.registrationForm.get('name');
  }

  get phone() {
    return this.registrationForm.get('phone');
  }

  get gender() {
    return this.registrationForm.get('gender');
  }

  get age() {
    return this.registrationForm.get('age');
  }

  get passwords() {
    return this.registrationForm.get('passwords');
  }

  get password() {
    return this.passwords.get('password');
  }

  get country() {
    return this.passwords.get('country');
  }

  get passwordConfirmation() {
    return this.passwords.get('passwordConfirmation');
  }

}
