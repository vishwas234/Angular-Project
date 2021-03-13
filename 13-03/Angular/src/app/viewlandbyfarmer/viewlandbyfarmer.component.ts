import { Component, OnInit } from '@angular/core';
import { Land } from '../land';
import { Router } from '@angular/router';
import { LandService } from '../land.service';
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
  constructor(private Landservice: LandService, private router: Router) { }

  ngOnInit(): void {
    this.lands = this.Landservice.viewAllLands().subscribe(
      Response => {
        this.lands = Response;
      }
    )
    console.log("reached....")

  } addLand() {
    this.Landservice.addLandByFarmer(this.land).subscribe(
      data => console.log("response received"),
      error => console.log("exception was occured")
    )
  }

  public deleteLand(land: any) {
    console.log('Deleted Employee: ');
    console.log(land);

    this.Landservice.delete(land).subscribe((data: any) => {
      const i = this.lands.findIndex((record: any) => { return record.surveyNumber === land.surveyNumber; })
      this.lands.splice(i, 1);
    });

    //this.Landservice.delete(land).subscribe((data: any) => console.log(data));
  }

  showEditPopup(land: any): void {
    this.editLand = land;
    $('#landModel').modal('show');
  }
  updateland(): void {
    console.log(this.editLand);
    this.Landservice.editland(this.editLand).subscribe();
  }

}
