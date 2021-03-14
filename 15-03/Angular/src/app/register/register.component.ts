import { Router } from '@angular/router';
import { Userkind } from './../userkind';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';
import { ToastrService } from 'ngx-toastr';
// import { NgForm } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User;
  userselected: any;
  modifiedtext: number;
  userkinds: Userkind[] = [
    { id: 1, name: "Farmer" },
    { id: 2, name: "Bidder" }
  ];

  constructor(private serv: RegisterService, private router: Router, private toastr: ToastrService) {
    this.modifiedtext = 2;
  }

  ngOnInit(): void {
  }
  registerUser() {
    this.modifiedtext = this.userselected;

    let var1 = this.modifiedtext;
    if (var1 == 1) {
      this.serv.registerFarmerFromRemote(this.user).subscribe(
        data => { console.log("response received"), this.router.navigate(['login']), this.toastr.success("Registered Successfully") },
        error => { console.log("exception was occured"), this.toastr.success("Error occured") }
      )

    }
    if (var1 == 2) {
      this.serv.registerBidderFromRemote(this.user).subscribe(
        data => { console.log("response received"), this.router.navigate(['login']), this.toastr.success("Registered Successfully") },
        error => { console.log("exception was occured"), this.toastr.error("Error occured") }
      )
      this.router.navigate(['login']);
    }

  }


}
