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

}
