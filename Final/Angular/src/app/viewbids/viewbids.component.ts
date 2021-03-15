import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BidService } from '../bid.service';

@Component({
  selector: 'app-viewbids',
  templateUrl: './viewbids.component.html',
  styleUrls: ['./viewbids.component.css']
})
export class ViewbidsComponent implements OnInit {
  bids: any;
  constructor(private serve: BidService, private router: Router) { }
  ngOnInit(): void {
    this.bids = this.serve.viewAllBids().subscribe(
      Response => {
        this.bids = Response
      }
    )
  }

}
