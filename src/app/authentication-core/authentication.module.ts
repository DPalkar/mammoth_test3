import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { NotFoundComponent } from '@app/authentication-core/404/not-found.component';
import { AuthenticationRoutes } from '@app/authentication-core/authentication.routing';
import { LoginComponent } from '@app/authentication-core/login/login.component';
import { SignupComponent } from '@app/authentication-core/signup/signup.component';
import { SharedModule } from '@app/shared';
import { MammothComponent } from './mammoth/mammoth.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
    SharedModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgxDocViewerModule
  ],
  declarations: [
    NotFoundComponent,
    SignupComponent,
    LoginComponent,
    MammothComponent
  ]
})
export class AuthenticationModule {}
