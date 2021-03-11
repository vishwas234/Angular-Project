import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { LoginService } from '../login.service';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  nrSelect : any;
  alert : boolean = false;
  user = new User();
  constructor(private serv : LoginService , private commserve : CommonService,private router : Router) { }

  ngOnInit(): void {
  }
  
  loginUser(){
    this.alert = true;
    if(this.nrSelect === 1){
    this.serv.loginFarmerFromRemote(this.user).subscribe(
      data => console.log("response received"),
      error => console.log("exception was occured")
    )
      this.alert = true;

      this.commserve.setloginin();
      this.router.navigate(['farmerview']);
    }
    else{
      this.serv.loginBidderFromRemote(this.user).subscribe(
      data => console.log("response received"),
      error => console.log("exception was occured")
    )
    this.commserve.setloginin();
    this.router.navigate(['bidderview']);
    }
  }
}
