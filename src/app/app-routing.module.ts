import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './admin/registration/registration.component';
import { DetailsComponent } from './admin/details/details.component';
import { ListComponent } from './admin/list/list.component';
import { UpdateComponent } from './admin/update/update.component';
import { ActivateUserComponent } from './secretary/activate-user/activate-user.component';
import { DetailsUserComponent } from './secretary/details-user/details-user.component';
import { UpdateUserComponent } from './secretary/update-user/update-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { RegistrationThesisComponent } from './user/registration-thesis/registration-thesis.component';
import { RegisterThesisComponent } from './secretary/register-thesis/register-thesis.component';
const routes: Routes = [
  { path : '', component : LoginComponent},
  // { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: ListComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'secretary', component: ActivateUserComponent },
  { path: 'updatesec/:id', component: UpdateUserComponent },
  { path: 'detailssec/:id', component: DetailsUserComponent },
  { path : 'user/:id', component : UserListComponent},
  { path : 'registrationthesis/:id', component : RegistrationThesisComponent},
  { path : 'thesis', component : RegisterThesisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
