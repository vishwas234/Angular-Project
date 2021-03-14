import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { User } from '../user';
import {NgForm} from '@angular/forms';
import {Userkind} from '../userkind';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nrSelect = 2;

  userselected : any;
  modifiedtext :number;
  userkinds : Userkind[] = [
    {id:1,name : "Farmer"},
    {id:2,name : "Bidder"}
  ];

  
  user = new User;
  constructor(private serv : RegisterService) { 
    this.modifiedtext = 2;
  }

  ngOnInit(): void {
  }
  registerUser(){
    this.modifiedtext =this.userselected;

    let var1 = this.modifiedtext;
    if(var1 == 1){
    this.serv.registerFarmerFromRemote(this.user).subscribe(
      data => console.log("response received"),
      error => console.log("exception was occured")
    )}
    if(var1 == 2){
    this.serv.registerBidderFromRemote(this.user).subscribe(
      data => console.log("response received"),
      error => console.log("exception was occured")
    )}

}
}