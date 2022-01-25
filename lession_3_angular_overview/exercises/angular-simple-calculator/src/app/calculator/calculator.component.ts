import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  title = 'angular-simple-calculator';
  public num1: number;
  public num2: number;
  public result: any = 0;

  ngOnInit(): void {
  }

  constructor() {
  }

  setValue1($event: any): void {
    this.num1 = $event.target.value;
  }

  setValue2($event: any): void {
    this.num2 = $event.target.value;
  }


  add() {
    this.result = Number(this.num1) + Number(this.num2);
  }

  sub() {
    this.result = Number(this.num1) - Number(this.num2);
  }

  multiply() {
    this.result = Number(this.num1) * Number(this.num2);
  }

  divide() {
    // tslint:disable-next-line:triple-equals
    if (this.num2 == 0) {
      this.result = 'can not divide for 0';
    } else {
      this.result = Number(this.num1) / Number(this.num2);
    }
  }

}
