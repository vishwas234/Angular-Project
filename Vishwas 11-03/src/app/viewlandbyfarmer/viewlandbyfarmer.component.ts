import { Component, OnInit } from '@angular/core';
import { Land } from '../land';
import { Router } from '@angular/router';
import { LandService } from '../land.service';
import { Subscriber } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-viewlandbyfarmer',
  templateUrl: './viewlandbyfarmer.component.html',
  styleUrls: ['./viewlandbyfarmer.component.css']
})
export class ViewlandbyfarmerComponent implements OnInit {
  editLand: any;
  lands: any;
  land = new Land();
  constructor(private serv: LandService, private router: Router) { }

  ngOnInit(): void {
    this.lands = this.serv.viewAllLands().subscribe(
      Response => {
        this.lands = Response;
      }
    )
    console.log("reached....")

  } 
  addLand() {
    this.serv.addLandByFarmer(this.land).subscribe(
      data => console.log("response received"),
      error => console.log("exception was occured")
    )
  }

  deleteLand() {
    console.log('Deleted Employee: ');
    let var1 = this.land.landId;
    // this.serv.deleteLand().subscribe(
    //   data => console.log("response received"),
    //   error => console.log("exception was occured")
    // )
      

  }

  showEditPopup(land: any): void {
    this.editLand = land;
    $('#myModal').modal('show');
  }
  updateland(): void {
    console.log(this.editLand);
    // this.service.getFarmers(this.editEmployee).subscribe();
  }

}
