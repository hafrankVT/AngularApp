import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  // tslint:disable-next-line:no-inferrable-types
  showExtended: boolean = true;
  // tslint:disable-next-line:no-inferrable-types
  loaded: boolean = false;
  enableAdd = true;
  currentClasses = {};

  constructor() { }

  ngOnInit() {
    console.log('init...');
    setTimeout(() => {
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
          image: 'http://lorempixel.com/600/600/people/3',
          isActive: true
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
          image: 'http://lorempixel.com/600/600/people/2',
          isActive: false
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
          image: 'http://lorempixel.com/600/600/people/1'
        }
      ];

      this.addUser({
        firstName: 'Matt',
        lastName: 'Smith'
      });
      this.loaded = true;
    }, 3000);
    // This is where you would initialize API calls and such, rather than the constructor which is for Properties


    this.showExtended = true;
    this.setCurrentClasses();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'btn-success': this.enableAdd,
      'big-text': this.showExtended
    };
  }
}
