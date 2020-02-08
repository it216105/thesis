import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User;
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
    

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];

    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
        this.firstname = data.firstName;
        this.lastname = data.lastName;
        this.password = data.password;
        this.username = data.username;
        this.email = data.email;
        this.address = data.address;
        this.phone = data.phone;
        this.role = data.role;
        this.yearOfStudies = data.yearOfStudies;
        this.owesLessons = data.owesLessons;
      }, error => console.log(error));
  }

  updateUser() {

    this.user = new User();
    this.user.id = this.id;
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
    this.userService.updateUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }


  gotoList() {
    this.router.navigate(['secretary']);
  }
}
