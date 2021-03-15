import { UserroleService } from './../userrole.service';
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
  constructor(private Landservice: LandService, private router: Router, public roleServ: UserroleService
  ) { }
  ngOnInit(): void {
    this.lands = this.Landservice.viewAllLands().subscribe(
      Response => {
        this.lands = Response;
      }
    )
    console.log("reached....")
  }

  registeruser(bidForm: any) {
    console.log("bid registration details:");
    console.log(bidForm);
    this.Landservice.register(bidForm).subscribe((result: any) => console.log(result));
  }

  addBid(bid: any) {
    console.log('Deleted Employee: ');
    console.log(bid);
    jQuery('#bidModel').modal('show');

  }


}
