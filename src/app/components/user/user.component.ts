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
  firstName = 'John';
  lastName = 'Doe';
  age = 30;

  // Methods
  constructor() {
    console.log('Hello User.');
    console.log(this.age);
    this.sayHello();
    this.hasBirthday();
    console.log(this.age);
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
  }

  hasBirthday() {
    this.age += 1;
  }
}
