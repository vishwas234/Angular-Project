import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitLoginForm(loginForm: any): void {
   
    console.log(loginForm);
    if(loginForm.loginId === 'admin' && loginForm.password === 'admin') {
     
  
    }
  }
}
