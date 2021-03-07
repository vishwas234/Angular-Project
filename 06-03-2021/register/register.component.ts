import { BidderService } from './../bidder.service';
import { FarmerService } from './../farmer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  farmerservice: FarmerService
  bidderservice: BidderService
  Bidder: any

  constructor() {
  
   }

  ngOnInit(): void {
  }

  registeruser(regForm: any): any {
    // this.Farmerservice.register(regForm).subscribe((result: any) => console.log(result));
    // if (regForm.selector === "1") {

    //   console.log(regForm);

    //   this.bidderservice.register(regForm).subscribe((data: any) => { console.log(data) });
    // }

    // else if (regForm.selector === "2") {
    //    console.log(regForm);
    //     this.farmerservice.register(regForm).subscribe((result: any) => console.log(result));
    // }
  }
}




