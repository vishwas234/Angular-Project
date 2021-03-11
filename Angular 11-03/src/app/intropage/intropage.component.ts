import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intropage',
  templateUrl: './intropage.component.html',
  styleUrls: ['./intropage.component.css']
})
export class IntropageComponent implements OnInit {

  constructor(public router : Router) {

  
   }

  ngOnInit(): void {
  }
   

}
