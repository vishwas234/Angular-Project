import { Component, OnInit } from '@angular/core';
import { BidService } from '../bid.service';
import {Bid} from '../bid';
declare var jQuery: any;

@Component({
  selector: 'app-viewbidbybidder',
  templateUrl: './viewbidbybidder.component.html',
  styleUrls: ['./viewbidbybidder.component.css']
})
export class ViewbidbybidderComponent implements OnInit {
  bid :any;
  editBid : any;
  constructor(private serve : BidService) { }
  ngOnInit(): void {
    this.bid =this.serve.viewAllBids().subscribe(
      Response =>{
        this.bid = Response
      }
    )
    }
    deleteBid(bid: any) {
      console.log('Deleted Employee: ');
      console.log(bid);
  
      //this.service.deleteEmployee(employee).subscribe((data: any) => {
      //const i = this.employees.findIndex((record: any) => {return record.empId === employee.empId;})
      //this.employees.splice(i, 1);
    }
  showEditPopup(bid: any): void {
      this.editBid = bid;
      jQuery('#bidModel').modal('show');
    }
    updateBid(): void {
      console.log(this.editBid);
      // this.service.getFarmers(this.editEmployee).subscribe();
    }
  
}
