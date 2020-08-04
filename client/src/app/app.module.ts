import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';

// My Imports.
import { NbThemeModule, NbSidebarModule, NbLayoutModule, NbButtonModule, NbCardModule, NbListModule, NbUserModule, NbMenuModule, NbIconModule, NbContextMenuModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbPasswordAuthStrategy, NbAuthModule, NbAuthJWTToken } from '@nebular/auth';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UsersPageComponent } from './components/pages/users-page/users-page.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ProfilePageComponent } from './components/pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsersComponent,
    UsersPageComponent,
    ProfilePageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    // Nebular Imports.
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbButtonModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbContextMenuModule,
    NbMenuModule.forRoot(),
    NbIconModule,
    NbEvaIconsModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',

          token: {
            class: NbAuthJWTToken,
            key: 'token', // this parameter tells Nebular where to look for the token
          },

          baseEndpoint: 'api',
          login: {
            redirect: {
              success: '/',
              failure: null, // stay on the same page
            },
            endpoint: '/auth/sign-in',
            method: 'post',
          },
          register: {
            redirect: {
              success: '/',
              failure: null, // stay on the same page
            },
            endpoint: '/auth/sign-up',
            method: 'post',
          },
          logout: {
            endpoint: '/auth/sign-out',
            method: 'post',
          },
          requestPass: {
            endpoint: '/auth/request-pass',
            method: 'post',
          },
          resetPass: {
            endpoint: '/auth/reset-pass',
            method: 'post',
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        register: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        requestPassword: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        resetPassword: {
          redirectDelay: 0,
          showMessages: {
            success: true,
          },
        },
        logout: {
          redirectDelay: 0,
        },
      }
    }),
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
