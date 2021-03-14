import { Land } from './../land';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandService } from '../land.service';
declare var $: any;
@Component({
  selector: 'app-viewlandbyfarmer',
  templateUrl: './viewlandbyfarmer.component.html',
  styleUrls: ['./viewlandbyfarmer.component.css']
})
export class ViewlandbyfarmerComponent implements OnInit {

  land = new Land();
  lands: any;
  public editland = new Land();
  constructor(private Landservice: LandService, private router: Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.lands = this.Landservice.viewAllLands().subscribe(
      Response => {
        this.lands = Response;
      }
    )
    console.log("reached....")

  } addLand() {
    this.Landservice.addLandByFarmer(this.land).subscribe(
      data => { console.log("response received") },
      error => console.log("exception was occured")
    )
  }

  public deleteLand(land: any) {
    console.log('Deleted Land: ');
    console.log(land);

    this.Landservice.delete(land.surveyNumber).subscribe((data: any) => {
      const i = this.lands.findIndex((record: any) => { return record.surveyNumber === land.surveyNumber; }, this.toastr.error("Land Deleted."))
      this.lands.splice(i, 1);
    });
  }

  showEditPopup(land: any): void {
    this.editland = land;
    $('#landModel').modal('show');
  }
  updateland(): void {
    console.log(this.editland);
    this.Landservice.editland(this.editland).subscribe();
  }

}
