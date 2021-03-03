import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registeruser(regForm: any) {
    console.log("User Registration Details:");
    console.log(regForm);    
  }
  submitregisterForm(registerForm: any): void {
   
    console.log(registerForm);
    if(registerForm.loginId === 'admin' && registerForm.password === 'admin') {
     
  
    }
  // selector(RegisterForm : any ) {
    
  // }
  }
}
