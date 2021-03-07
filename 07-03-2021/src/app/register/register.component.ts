
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // farmerservice: FarmerService
  // bidderservice: BidderService
  // Bidder: any
  // farmers: string[];
  constructor(
    //  public farmerId: number,
    // public farmerName: string,
    // public address: string,
    // public mobile: string,
    // public loginId: string,
    // public password: string,
    // public name: string,
    // public farmerService: FarmerService
  ) { }

  ngOnInit(): void {
    // this.farmerService.registerFarmers().subscribe(
    //   response => this.handleSuccessfulResponse(response),
    // );
  }
  // handleSuccessfulResponse(response) {
  //   this.farmers = response;
  // }


  registeruser(regForm: any) {

  }
}







