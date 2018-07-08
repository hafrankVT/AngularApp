import { Component, OnInit, ViewChild} from '@angular/core';
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
    email: ''
  };
  users: User[];
  // tslint:disable-next-line:no-inferrable-types
  showExtended: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  loaded: boolean = false;
  enableAdd = false;
  showUserForm = false;
  @ViewChild('userForm') form: any;

  constructor() { }

  ngOnInit() {
    console.log('init...');
    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'John@gmail.com',
        isActive: true,
        registered: new Date('01/02/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Kevin',
        lastName: 'Hart',
        email: 'Kevin@aol.com',
        isActive: false,
        registered: new Date('03/11/2018 08:30:00'),
        hide: true
      },
      {
        firstName: 'Karen',
        lastName: 'Gillan',
        email: 'Karen@tardis.uk',
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
      email: '',
    };
  }

  // toggleHide(user: User) {
  //   user.hide = ! user.hide;
  // }

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form is not valid.');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.users.unshift(value);

      this.form.reset();
    }
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}
