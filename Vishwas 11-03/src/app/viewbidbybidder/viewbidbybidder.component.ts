import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditanddelService } from '../editanddel.service';
import {Bid} from '../bid';

declare var jQuery: any;

@Component({
  selector: 'app-viewbidbybidder',
  templateUrl: './viewbidbybidder.component.html',
  styleUrls: ['./viewbidbybidder.component.css']
})
export class ViewbidbybidderComponent implements OnInit {
  bid = new Bid();
  constructor(private service :EditanddelService ,private router : Router) { }
  deleteBid() {
    this.service.deleteBid().subscribe(
      (resp) => {
        console.log(resp);
      },
      (err) =>console.log(err)
    );
    
     }

  ngOnInit(): void {
  }
  showEditPopup(bid: any): void {
    jQuery('#bidModel').modal('show');
  }
  updateBid() {
  }

}
