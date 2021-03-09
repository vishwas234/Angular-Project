import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nrSelect = 1;
  user = new User;
  constructor(private serv : RegisterService) { }

  ngOnInit(): void {
  }
  registerUser(){
    if(this.nrSelect === 1){
    this.serv.registerFarmerFromRemote(this.user).subscribe(
      data => console.log("response received"),
      error => console.log("exception was occured")
    )}
    if(this.nrSelect === 2){
    this.serv.registerBidderFromRemote(this.user).subscribe(
      data => console.log("response received"),
      error => console.log("exception was occured")
    )}

}
}