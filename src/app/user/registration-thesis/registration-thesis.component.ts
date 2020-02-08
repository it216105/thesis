import { Thesis } from './../../model/Thesis';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-registration-thesis',
  templateUrl: './registration-thesis.component.html',
  styleUrls: ['./registration-thesis.component.css']
})
export class RegistrationThesisComponent implements OnInit {

  id: number;
  thesis: Thesis[];


  constructor(private userService: UserService,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.userService.getThesis().subscribe(
      data => {
        this.thesis = data;
        console.log(data);
      },
      error => console.log(error));
  }

  choseThesis(idThesis: number): void {
    console.log(this.id,"user");
    console.log(idThesis,"thesis");

    this.userService.chooseThesis(this.id, idThesis)
      .subscribe(data => console.log(data), error => console.log(error));
    this.gotoList();
  }

  gotoList() {
    this.router.navigate(['/user', this.id]);
  }
}
