import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BidService } from '../bid.service';
@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.css']
})
export class AdminviewComponent implements OnInit {
  bids: any
  bid: any

  constructor(private serve: BidService, private router: Router) { }

  ngOnInit(): void {
    this.bids = this.serve.viewAllBids().subscribe(
      Response => {
        this.bids = Response
      }
    )
  }
  deleteBid(bid: any) {
    console.log('Deleted Employee: ');
    console.log(bid);

    this.serve.deleteBid(bid.surveyNumber).subscribe((data: any) => {
      const i = this.bids.findIndex((record: any) => { return record.surveyNumber === bid.surveyNumber; })
      this.bids.splice(i, 1);
    });
  }
}
