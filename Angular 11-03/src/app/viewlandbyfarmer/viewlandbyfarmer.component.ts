import { Component, OnInit } from '@angular/core';
import {Land} from '../land';
import {Router} from '@angular/router';
import {LandService} from '../land.service';

@Component({
  selector: 'app-viewlandbyfarmer',
  templateUrl: './viewlandbyfarmer.component.html',
  styleUrls: ['./viewlandbyfarmer.component.css']
})
export class ViewlandbyfarmerComponent implements OnInit {
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

}
