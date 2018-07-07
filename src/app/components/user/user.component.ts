import { Component } from '@angular/core';
import { User } from '../../models/User';

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
  user: User;

  // Methods
  constructor() {
    this.user = {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      address: {
        street: '50 Main Street',
        city: 'Boston',
        state: 'MA'
      }
    };
  }
}

