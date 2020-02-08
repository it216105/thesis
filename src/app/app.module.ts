import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CustomMaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import { DetailsComponent } from './admin/details/details.component';
import { ListComponent } from './admin/list/list.component';
import { UpdateComponent } from './admin/update/update.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationThesisComponent } from './user/registration-thesis/registration-thesis.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { ActivateUserComponent } from './secretary/activate-user/activate-user.component';
import { UpdateUserComponent } from './secretary/update-user/update-user.component';
import { DetailsUserComponent } from './secretary/details-user/details-user.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterThesisComponent } from './secretary/register-thesis/register-thesis.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    DetailsComponent,
    ListComponent,
    UpdateComponent,
    RegistrationThesisComponent,
    UserListComponent,
    ActivateUserComponent,
    UpdateUserComponent,
    DetailsUserComponent,
    LogoutComponent,
    RegisterThesisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
