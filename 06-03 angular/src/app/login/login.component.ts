import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }
  submitLoginForm(loginForm: any): void {

    console.log(loginForm);
  //  if (loginForm.loginId === 'farmer' && loginForm.password === 'password') {
    //  this.router.navigate(['farmerheader']);
    //}
    //else if (loginForm.loginId === 'bidder' && loginForm.password === 'password') {
      //this.router.navigate(['bidderheader']);
    //}
  
    if(loginForm.selector ==='1' ){
      this.router.navigate(['farmerheader']);
    }
      else if (loginForm.selector ==='2' ){
        this.router.navigate(['bidderheader']);
      }
    }
  }