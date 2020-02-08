import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

    user: User = new User();
    firstname: string;
    lastname: string;
    password: string;
    username: string;
    email: string;
    address: string;
    phone: string;
    role: string;
    yearOfStudies: string;
    owesLessons: string;

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
    }

    newUser(): void {

      this.user = new User();
      this.user.firstName = this.firstname;
      this.user.lastName = this.lastname;
      this.user.password = this.password;
      this.user.username = this.username;
      this.user.email = this.email;
      this.user.address = this.address;
      this.user.phone = this.phone;
      this.user.role = this.role;
      this.user.yearOfStudies = this.yearOfStudies;
      this.user.owesLessons = this.owesLessons;

      this.userService.createUser(this.user)
        .subscribe(data => console.log(data), error => console.log(error));
      this.user = new User();
      this.gotoList();
    }

    gotoList() {
      this.router.navigate(['/admin']);
    }
}
