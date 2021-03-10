import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BidderComponent } from './bidder/bidder.component';
// import { Farmer } from './farmer';
@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(public httpclient: HttpClient) { }
  register(bidder: any): any {
    return this.httpclient.post('registerBidder', bidder);
  }

  // register1(farmer: Farmer): Promise<Array<Employee>> {
  //   let empHeaders = new Headers({ 'Content-Type': 'application/json' });
  //   return this.http.post(this.apiUrl, JSON.stringify(employee), { headers: empHeaders })
  //     .toPromise()
  //     .then(response => response.json() as Employee[])
  //     .catch(this.handleError);
  // }

}
