import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
farmerheader : any;
bidderheader : any;
  constructor(public router : Router) {
    
    
  
   }
   go(){
    this.router.navigate(['/intropage']); // navigate to other page
  }
  ngOnInit(): void {
  }
}
