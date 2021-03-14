import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { LoginService } from '../login.service';
import { User } from '../user';
import {Userkind} from '../userkind';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  userselected : any;
  modifiedtext :number;
  userkinds : Userkind[] = [
    {id:1,name : "Farmer"},
    {id:2,name : "Bidder"},
    {id:3,name : "Admin"}
  ];

  alert: boolean = false;
  user = new User();
  constructor(private serv: LoginService, private commserve: CommonService, private router: Router) { 
    this.modifiedtext = 2;
  }

  ngOnInit() {
      
  }

  loginUser() {
    this.modifiedtext =this.userselected;
    console.log("Form value is " +JSON.stringify(this.user) +" and modifiedtext = " +this.modifiedtext +"and selecteduser" +this.userselected);

    let var1  = this.modifiedtext;
    //let var2 =1;
    //console.log( var1==var2);

    if ( var1 == 1 && this.user.loginId!= "admin" && this.user.password!="admin")  {
      console.log("inside farmer navigate");
      this.serv.loginFarmerFromRemote(this.user).subscribe(
        data => {console.log("response received")
        this.alert = true;

        this.commserve.setloginin();
        this.router.navigate(['farmerview']);
  

      },
        error => console.log("exception was occured")
      )
         }
     else {
     if (var1 == 2  && this.user.loginId!= "admin" && this.user.password!="admin"){
      console.log("inside bidder navigate");
       this.serv.loginBidderFromRemote(this.user).subscribe(
         data =>{ console.log("response received")
         this.commserve.setloginin();
         this.router.navigate(['bidderview']);
      
       },
         error => console.log("exception was occured")
       )
      }
    else{
    
      console.log(this.modifiedtext +" " +typeof this.modifiedtext +" " +typeof this.userselected);
      console.log("inside other navigate");
     
    }
  }
}

}