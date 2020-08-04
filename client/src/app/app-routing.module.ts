import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { UsersPageComponent } from './components/pages/users-page/users-page.component';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';
import { AuthGuardService } from './services/auth-guard.service';

// My Imports.
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';

const routes: Routes = [
  {
    path: '',
    // canActivate: [AuthGuardService],
    component: HomePageComponent
  },
  {
    path: 'users',
    canActivate: [AuthGuardService],
    component: UsersPageComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuardService],
    component: ProfilePageComponent
  },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      // ...
    ],
  },

  // The NbAuth paths.
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
