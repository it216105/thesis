import { Component, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from "rxjs";
import { User } from '../../model/User';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-activate-user',
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.css']
})
export class ActivateUserComponent implements OnInit, OnChanges  {

  users: User[];

    constructor(private userService: UserService,
      private router: Router) {}

    ngOnInit() {
      this.reloadData();
      console.log("users ",this.users);
    }

    ngOnChanges(changes: SimpleChanges) {
      this.reloadData();
    // changes.prop contains the old and the new value...
  }

    reloadData() {
      // this.users = this.userService.getUserList();
      this.userService.getStudentList().subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => console.log(error));
    }

    activateUser(id: number) {
      this.userService.activateStudent(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
    }


    userDetails(id: number){
      this.router.navigate(['detailssec', id]);
    }

    userUodate(id: number){
      this.router.navigate(['updatesec', id]);
    }

    gotoList(){
      this.router.navigate(['secretary']);
    }

    registerThesis(){
      this.router.navigate(['thesis']);
    }
  }
