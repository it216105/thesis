import { Component, OnInit } from '@angular/core';
import { Thesis } from '../../model/Thesis';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-register-thesis',
  templateUrl: './register-thesis.component.html',
  styleUrls: ['./register-thesis.component.css']
})
export class RegisterThesisComponent implements OnInit {

    thesis: Thesis = new Thesis();
    keyWords: string;
    subject: string;
    teacher: string;
    type: string;
   

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() {
    }

    newThesis(): void {

      this.thesis = new Thesis();
      this.thesis.keyWords = this.keyWords;
      this.thesis.subject = this.subject;
      this.thesis.teacher = this.teacher;
      this.thesis.type = this.type;
      console.log(this.type,"DSAD");
      console.log(this.thesis);
      this.userService.registerThesis(this.thesis)
        .subscribe(data => console.log(data), error => console.log(error));
      this.thesis = new Thesis();
      this.gotoList();
    }

    gotoList() {
      this.router.navigate(['/secretary']);
    }
  }