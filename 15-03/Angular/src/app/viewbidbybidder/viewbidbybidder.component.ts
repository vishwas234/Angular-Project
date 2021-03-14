import { Bid } from './../bid';
import { Component, OnInit } from '@angular/core';
import { BidService } from '../bid.service';
import { ToastrService } from 'ngx-toastr';
declare var jQuery: any;

@Component({
  selector: 'app-viewbidbybidder',
  templateUrl: './viewbidbybidder.component.html',
  styleUrls: ['./viewbidbybidder.component.css']
})
export class ViewbidbybidderComponent implements OnInit {
  editBid = new Bid();
  bids: any;
  bid = new Bid();

  constructor(private serve: BidService, private toastr: ToastrService) { }
  deleteBid(bid: any) {
    console.log('Deleted Bid: ');
    console.log(bid);
    this.serve.deleteBid(bid.surveyNumber).subscribe((data: any) => {
      const i = this.bids.findIndex((record: any) => { return record.surveyNumber === bid.surveyNumber; }, this.toastr.error("Bid Deleted."))
      this.bids.splice(i, 1);
    });
  }

  ngOnInit(): void {
    this.bids = this.serve.viewAllBids().subscribe(
      Response => {
        this.bids = Response
      }
    )
  }

  showEditPopup(bid: any): void {
    this.editBid = bid;
    jQuery('#bidModel').modal('show');
  }

  updateBid(): void {
    console.log(this.editBid);
    this.serve.updateBid(this.editBid).subscribe();
  }

}
