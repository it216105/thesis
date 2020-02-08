import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { MatDialog } from '@angular/material'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }
  username: string;
  password: string;
  user: User;

  ngOnInit() { }

  login(): void {

      this.user = new User();
      this.user.username = this.username;
      this.user.password = this.password;
      // console.log(this.user);

    this.userService.login(this.user)
      .subscribe(data => {
         console.log(data.id);
        if (data.role == 'admin') {
         this.router.navigate(["admin"]);
       } else if (data.role == 'secretary') {
         this.router.navigate(["secretary"]);
       }else if (data.role == 'student') {
         this.router.navigate(["user",data.id]);
       }
      }, error => console.log(error));
    // console.log(this.username)
    // if (this.username == 'admin' && this.password == 'admin') {
    //   this.router.navigate(["admin"]);
    // } else {
    //   alert("Invalid credentials");
    // }
  }
}
