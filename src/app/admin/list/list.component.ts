import { Component, OnInit,AfterViewInit } from '@angular/core';
import { Observable } from "rxjs";
import { User } from '../../model/User';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, AfterViewInit {

  users: User[];

    constructor(private userService: UserService,
      private router: Router) {}

    ngOnInit() {
      this.reloadData();
      console.log("users ",this.users);
    }

    ngAfterViewInit(){
      this.reloadData();
    }

    reloadData() {
      // this.users = this.userService.getUserList();
      this.userService.getUserList().subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => console.log(error));
    }

    deleteUser(id: number) {
      this.userService.deleteUser(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }

    createUser(){
      this.router.navigate(['registration']);
    }

    userDetails(id: number){
      this.router.navigate(['details', id]);
    }

    userUodate(id: number){
      this.router.navigate(['update', id]);
    }
  }
