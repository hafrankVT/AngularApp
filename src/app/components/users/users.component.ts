import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    // Default Values for a new user
    firstName: '',
    lastName: '',
    // These fields are not required, but adding defaults anyways.
    age: null,
    address: {
      street: '',
      city: '',
      state: '',
    }
  };
  users: User[];
  // tslint:disable-next-line:no-inferrable-types
  showExtended: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  loaded: boolean = false;
  enableAdd = false;
  showUserForm = false;

  constructor() { }

  ngOnInit() {
    console.log('init...');
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '50 Main Street',
          city: 'Boston',
          state: 'MA'
        },
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Hart',
        age: 34,
        address: {
          street: '20 School Street',
          city: 'Boston',
          state: 'MA'
        },
        isActive: false,
        registered: new Date('03/11/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Gillan',
        age: 34,
        address: {
          street: 'The T.A.R.D.I.S',
          city: 'London',
          state: 'England'
        },
        registered: new Date('11/02/2017 10:30:00'),
        hide: true
      }
    ];

    this.loaded = true;
  }
  // This is where you would initialize API calls and such, rather than the constructor which is for Properties

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.user.hide = true;
    this.users.unshift(this.user);

    this.user = {
      // Default Values for a new user
      firstName: '',
      lastName: '',
      // These fields are not required, but adding defaults anyways.
      age: null,
      address: {
        street: '',
        city: '',
        state: '',
      }
    };
  }

  // toggleHide(user: User) {
  //   user.hide = ! user.hide;
  // }

  onSubmit(e) {
    console.log(123);
    e.preventDefault();
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}
