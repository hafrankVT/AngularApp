import { Component, OnInit, ViewChild} from '@angular/core';
import { User } from '../../models/User';
import { DataService } from '../../services/data.service';

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

  constructor(private dataService: DataService) { }

  ngOnInit() {
    console.log('init...');
    console.log('Loading users from DataService...');
    this.users = this.dataService.getUsers();

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

  onSubmit({value, valid}: {value: User, valid: boolean}) {
    if (!valid) {
      console.log('Form is not valid.');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.addUser(value);

      this.form.reset();
    }
  }

  fireEvent(e) {
    console.log(e.type);
    console.log(e.target.value);
  }
}
