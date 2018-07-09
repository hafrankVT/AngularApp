import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[];
  // New property as an observable type.
  data: Observable<any>;

  constructor() {
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
  }

  // getData() {
  //   // this.data = new Observable(observer => {
  //   //   setTimeout(() => {
  //   //     observer.next(1); // this will publish to anything that's subscribed to this observable.
  //   //   }, 1000);
  //   //   setTimeout(() => {
  //   //     observer.next(2); // this will publish to anything that's subscribed to this observable.
  //   //   }, 2000);
  //   //   setTimeout(() => {
  //   //     observer.next(3); // this will publish to anything that's subscribed to this observable.
  //   //   }, 3000);
  //   //   setTimeout(() => {
  //   //     observer.next(4); // this will publish to anything that's subscribed to this observable.
  //   //   }, 4000);
  //   // });

  //   return this.data;
  // }

  getUsers(): Observable<User[]> {
    console.log('Fetching users');
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user);
  }
}
