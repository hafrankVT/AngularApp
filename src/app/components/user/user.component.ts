import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // template '<h2>John Doe</h2>' Not needed since we're using template URL
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  styles: [`
    h2 {
      color: blue
    }
  `]
})


export class UserComponent {
  // Properties
  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];

  // Methods
  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age = 30;
    this.address = {
      street: '50 Main Street',
      city: 'Boston',
      state: 'MA'
    };

    this.foo = true;
    this.hasKids = true;
    this.numberArray = [1, 2, 3];
    this.stringArray = ['hello', 'world'];
    this.mixedArray = [true, 42, 'Hi!'];
    this.myTuple = ['Hello', 13, false];

    console.log(this.addNumbers(2, 3));
  }

  showAge() {
    return this.age + 2;
  }

  addNumbers(num1: number, num2: number): number {
    return num1 + num2;
  }
}
