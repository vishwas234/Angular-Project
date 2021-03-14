import { Component, OnInit } from '@angular/core';
import { Bid } from '../bid';
import { BidService } from '../bid.service';

@Component({
  selector: 'app-addbid',
  templateUrl: './addbid.component.html',
  styleUrls: ['./addbid.component.css']
})
export class AddbidComponent implements OnInit {
  bid = new Bid();
  constructor(private serv : BidService) { }
  
  ngOnInit(): void {
  }
  addBid(){
    this.serv.addbid(this.bid).subscribe(
    data => console.log("response received"),
    error => console.log("exception was occured")
    )
}
}
