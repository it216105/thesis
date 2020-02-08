import { Component, OnInit } from '@angular/core';
import { User } from '../../model/User';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  id: number;
  user: User;

   constructor(private route: ActivatedRoute,private router: Router,
     private userService: UserService) { }

   ngOnInit() {
     this.user = new User();

     this.id = this.route.snapshot.params['id'];

     this.userService.getUser(this.id)
       .subscribe(data => {
         console.log(data)
         this.user = data;
       }, error => console.log(error));
   }

   register(){
     this.router.navigate(['registrationthesis',this.id]);
   }

}
