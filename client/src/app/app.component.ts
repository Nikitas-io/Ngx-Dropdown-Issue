import { Component, Inject } from '@angular/core';
// Import for the NbSidebar menu.
import { NbMenuItem } from '@nebular/theme';
// Imports for the JWT Authentication.
import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
// Imports for the user dropdown NbContextMenu.
import { NbSidebarService, NB_WINDOW, NbMenuService } from '@nebular/theme';
import { filter, map } from 'rxjs/operators';

import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // User login flag.
  isLoggedIn = false;
  // A user variable, which will store the JTW token payload inside of the component.
  user = {};
  // NbContextMenu dropdown options.
  dropdownItems = [
    {
      title: 'Profile',
      link: '/profile'
    },
    {
      title: 'Log out',
      link: '/auth/logout'
    }
  ];
  // The route paths of the application.
  items: NbMenuItem[] = [
    {
      title: 'Home',
      link: '/'
    },
    {
      title: 'Users',
      link: '/users'
    }
  ];

  constructor(@Inject(NB_WINDOW) private window,
              private sidebarService: NbSidebarService,
              private authService: NbAuthService,
              private usersService: UsersService,
              private nbMenuService: NbMenuService,
  ) {


    // Get the user token.
    this.authService.onTokenChange().subscribe((token: NbAuthJWTToken) => {
      // Validate the user token.
      if (token.isValid()) {
        // Receive the token payload and assign it to the `user` variable.
        this.user = token.getPayload();
        console.log(this.user["_id"]);

        // Change the login button to the user on the header.
        this.isLoggedIn = true;

        // Fetch the signed-in user's data.
        this.usersService.getUser(this.user["_id"]).subscribe(user => {
          // Set the signed in user's name.
          this.user["fullName"] = user["fullName"];
        })
      }

      if(!token.isValid()){
        // Change the User to the Login button on the header.
        this.isLoggedIn = false;
      }
    });

    // Context Menu Event Handler.
    this.nbMenuService.onItemClick().pipe(
      filter(({ tag }) => tag === 'my-context-menu'),
      map(({ item: { title } }) => title),
    ).subscribe((title) => {
      // Check if the Logout menu item was clicked.
      if (title == 'Log out') {
        // Logout the user.
        this.authService.logout('email').subscribe((Observable)=> {
          console.log('The logout observable is: ', Observable);

          // Clear the user. (THIS doesn't seem like the right way to do it).
          this.user = {};
        })
      }
    });

  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }


}
