import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  alert: boolean = false;

  constructor(public router: Router, public commonservice: CommonService) {
  }

  ngOnInit(): void {
  }
  submitLoginForm(loginForm: any): void {

    console.log(loginForm);
    this.alert = true;
    if (loginForm.loginId === 'farmer' && loginForm.password === 'password') {

      this.alert = true;

      this.commonservice.setloginin();
      this.router.navigate(['farmersview']);

    }
    else if (loginForm.loginId === 'bidder' && loginForm.password === 'password') {
      this.commonservice.setloginin();
      this.router.navigate(['bidderview']);

    }


  }
  closeAlert() {
    this.alert = false;
  }
}
