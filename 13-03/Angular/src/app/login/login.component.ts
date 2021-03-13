import { Userkind } from './../userkind';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { LoginService } from '../login.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  select = 1;
  alert: boolean = false;
  user = new User();
  userselected: any;
  modifiedtext: number;
  userkinds: Userkind[] = [
    { id: 1, name: "Farmer" },
    { id: 2, name: "Bidder" }

  ];

  constructor(private serv: LoginService, private commserve: CommonService, private router: Router, private toastr: ToastrService) {
    this.modifiedtext = 2;
  }

  ngOnInit(): void {
  }
  loginUser() {
    this.modifiedtext = this.userselected;
    console.log("Form value is " + JSON.stringify(this.user) + " and modifiedtext = " + this.modifiedtext + "and selecteduser" + this.userselected);

    let var1 = this.modifiedtext;
    //let var2 =1;
    //console.log( var1==var2);

    if (var1 == 1 && this.user.loginId != "admin" && this.user.password != "admin") {
      console.log("inside farmer navigate");
      this.serv.loginFarmerFromRemote(this.user).subscribe(
        data => {
          console.log("response received")
          this.alert = true;

          this.commserve.setloginin();
          this.router.navigate(['viewlandbyfarmer']);

          this.toastr.success("Welcome, Farmer.")

        },
        error => console.log("exception was occured")
      )
    }
    else {
      if (var1 == 2 && this.user.loginId != "admin" && this.user.password != "admin") {
        console.log("inside bidder navigate");
        this.serv.loginBidderFromRemote(this.user).subscribe(
          data => {
            console.log("response received")
            this.commserve.setloginin();
            this.router.navigate(['bidderview']);
            this.toastr.success("Welcome, Bidder.")
          },
          error => console.log("exception was occured")
        )
      }
      else {

        console.log(this.modifiedtext + " " + typeof this.modifiedtext + " " + typeof this.userselected);
        console.log("inside other navigate");
        this.router.navigate(['admin']);
        this.toastr.success("Welcome, Admin.")
      }
    }
  }
}




