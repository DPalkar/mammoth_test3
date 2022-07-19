import { Routes } from '@angular/router';

import { NotFoundComponent } from '@app/authentication-core/404/not-found.component';
import { LoginComponent } from '@app/authentication-core/login/login.component';
import { SignupComponent } from '@app/authentication-core/signup/signup.component';
import { MammothComponent } from './mammoth/mammoth.component';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotFoundComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'mammoth',
        component: MammothComponent
      }
    ]
  }
];
