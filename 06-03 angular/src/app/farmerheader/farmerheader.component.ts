import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-farmerheader',
  templateUrl: './farmerheader.component.html',
  styleUrls: ['./farmerheader.component.css']
})
export class FarmerheaderComponent implements OnInit {

  constructor(public router : Router) {
    
   }

  ngOnInit(): void {
  }

}
