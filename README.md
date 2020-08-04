<!--
ATTENTION! WE WILL HAVE TO CLOSE THIS ISSUE if you don't provide the needed information.
Please read https://github.com/akveo/ngx-admin/blob/master/CONTRIBUTING.md before opening an issue.
-->

### Issue type

**I'm submitting a bug report** 

### Issue description

**Current behavior:**
<!-- Describe how the bug manifests. -->
I should start out by saying that I'm creating a MEAN Stack Application that has **user login and registration** using Nebular components and the **email NbPasswordAuthStrategy**. To this point I was able to create a basic application with a sidebar, a header and some users. **The problem appears when a user signs-in to the application and attempts to click on the NbSelect component that appears on the top-right corner of the application**. The odd thing about this is that the problem goes away if you refresh the page after signing-in:
<img width="957" alt="1" src="https://user-images.githubusercontent.com/22666742/89318490-88aa1b80-d687-11ea-98e5-f5af7a4b31a1.png">

Here is the that error appears in the DevTools console up-close:
```
ERROR TypeError: Cannot read property 'appendChild' of null
    at NbOverlayContainerAdapter._createContainer (index.js:2006)
    at NbOverlayContainerAdapter.getContainerElement (overlay.js:1198)
    at NbOverlay._createHostElement (overlay.js:4233)
    at NbOverlay.create (overlay.js:4192)
    at NbOverlayService.create (index.js:2572)
    at NbDynamicOverlay.createOverlay (index.js:12052)
    at NbDynamicOverlay.show (index.js:12014)
    at SafeSubscriber._next (index.js:12243)
    at SafeSubscriber.__tryOrUnsub (Subscriber.js:183)
    at SafeSubscriber.next (Subscriber.js:122)
```

**Note1**: I did not use the ngx-admin-starter-kit, but rather I just created my own Angular App from scratch. 
**Note2**: While this example demonstrates the error with NbContextMenu, I assure you the exact same error appears under the same circumstances with the NbSelectComponent.

**Expected behavior:**
<!-- Describe what the behavior would be without the bug. -->
The appropriate would of course be that the drop-down context menu would appear instead of giving off this error.

**Steps to reproduce:**
<!--  Please explain the steps required to duplicate the issue, especially if you are able to provide a sample application. -->
Load up the site -> Create a user -> Login -> Click on the user NbContextMenu at the top right corner without refreshing the page.

**Related code:**
<!-- 
If you are able to illustrate the bug or feature request with an example, please provide a sample application via one of the following means:

A sample application via GitHub

StackBlitz (https://stackblitz.com)

Plunker (http://plnkr.co/edit/cpeRJs?p=preview)
-->
I've created [this public repository](https://github.com/Nikitas-io/Ngx-Admin-Menu-Issue) so that reviewers can look at the issue thoroughly and I also [deployed the project to Heroku for a live preview](https://nebularmeanstack.herokuapp.com/#/). You can create a new user to try it out yourself.

The offending code that refers to the Context Menu is located in the **app.component.ts** file:
```
export class AppComponent implements OnInit {

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
    },
    {
      title: 'Products',
      link: '/products'
    },
    {
      title: 'Orders',
      link: '/orders'
    },
  ];

  constructor(@Inject(NB_WINDOW) private window,
              private sidebarService: NbSidebarService,
              private authService: NbAuthService,
              private usersService: UsersService,
              private nbMenuService: NbMenuService,
  ) { }

  ngOnInit() {
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

      if (!token.isValid()) {
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
        this.authService.logout('email').subscribe((Observable) => {
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
```
and its corresponding **app.component.html** file:
```
<nb-layout>
  <nb-layout-header fixed>
    <button id="hamburger-button" nbButton status="info" size="medium" (click)="toggle()">☰</button>
    <!-- Check if the user is logged in.  -->
    <nb-user id="user-login" *ngIf="isLoggedIn" name="{{ user.fullName }}" [nbContextMenu]="dropdownItems" nbContextMenuTag="my-context-menu"></nb-user>
    <button id="user-login" *ngIf="!isLoggedIn" routerLink="/auth/login" nbButton status="primary" size="medium">Login</button>
  </nb-layout-header>

  <nb-sidebar tag="left">
      <nb-menu [items]="items"></nb-menu>
  </nb-sidebar>

  <nb-layout-column>
    <router-outlet></router-outlet>
  </nb-layout-column>
</nb-layout>

```
### Other information:
- Node Version: `v12.18.0`
- Npm Version:
```
{
  'nebular-app': '1.0.0',
  npm: '6.14.5',
  ares: '1.16.0',
  brotli: '1.0.7',
  cldr: '37.0',
  http_parser: '2.9.3',
  icu: '67.1',
  llhttp: '2.0.4',
  modules: '72',
  napi: '6',
  nghttp2: '1.41.0',
  node: '12.18.0',
  openssl: '1.1.1g',
  tz: '2019c',
  unicode: '13.0',
  uv: '1.37.0',
  v8: '7.8.279.23-node.37',
  zlib: '1.2.11'
}
```
OS: Windows 10
Browser: Brave Browser (It is a Chrome clone)

**Angular, Nebular**
package.json:
```
{
  "name": "nebular-app",
  "version": "1.0.0",
  "description": "An app constructed with Nebular components",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "debug": "node --inspect-brk server.js",
    "start": "nodemon server.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "@hapi/joi": "^17.1.1",
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mongojs": "^3.1.0",
    "mongoose": "^5.9.25"
  }
}
```
