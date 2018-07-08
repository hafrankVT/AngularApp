import { Component, OnInit } from '@angular/core';
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


export class UserComponent implements OnInit {
  // Properties
  user: User;

  // Methods
  constructor() {
  }

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
  }
}

