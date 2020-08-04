import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { User } from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: User[];

  // We can use the private usersService object anywhere within the class with 'this.usersService'
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    // This HTTP request is asynchronous (think of it as a JS promise). We use the subscribe
    // method (think of it as the .then() of the promise) to subscribe to the Observable
    // which is an asynchronous datastream.
    this.usersService.getUsers().subscribe(users => {
      // Save the users that are returned to our local users array of 'User' datatype.
      this.users = users;
    });
  }

  deleteUser(user: User) {
    // Delete a user by looping through all the users and returning all of them
    // except from the one that we want to deleted.
    this.users = this.users.filter(t => t._id !== user._id);
    // Remove from server by calling the deleteUser() method of the UserService.
    this.usersService.deleteUser(user).subscribe();
  }

}
