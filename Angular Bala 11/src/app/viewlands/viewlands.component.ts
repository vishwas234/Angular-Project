import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Land} from '../land';
import {LandService} from '../land.service';
@Component({
  selector: 'app-viewlands',
  templateUrl: './viewlands.component.html',
  styleUrls: ['./viewlands.component.css']
})
export class ViewlandsComponent implements OnInit {
  lands : any;
  constructor(private serv : LandService , private router : Router) { }
  ngOnInit(): void {
  this.lands =  this.serv.viewAllLands().subscribe(
      Response => {
        this.lands = Response;
      }
  )
  console.log("reached....")
  }
 // public viewAllLands(){
   // this.serv.addLandByFarmer(this.land).subscribe(
     // data => console.log("response received"),
      //error => console.log("exception was occured")
   // )
     
  //}
}
