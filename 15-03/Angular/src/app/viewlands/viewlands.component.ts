import { Bid } from './../bid';
import { Land } from './../land';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandService } from '../land.service';

declare var jQuery: any;

@Component({
  selector: 'app-viewlands',
  templateUrl: './viewlands.component.html',
  styleUrls: ['./viewlands.component.css']
})
export class ViewlandsComponent implements OnInit {
  lands: any;
  bid = new Bid();
  land = new Land();

  editBid: any;
  constructor(private Landservice: LandService, private router: Router) { }
  ngOnInit(): void {
    this.lands = this.Landservice.viewAllLands().subscribe(
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

  addBid(bid: any) {
    console.log('Deleted Employee: ');
    console.log(bid);
    jQuery('#bidModel').modal('show');
    //   //this.service.deleteEmployee(employee).subscribe((data: any) => {
    //   //const i = this.employees.findIndex((record: any) => {return record.empId === employee.empId;})
    //   //this.employees.splice(i, 1);
  }

  updateBid(): void {
    console.log(this.editBid);
    // this.service.getFarmers(this.editEmployee).subscribe();
  }
}
