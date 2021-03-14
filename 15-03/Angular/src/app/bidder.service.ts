import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(public httpclient: HttpClient) { }
  register(bidder: any): any {
    return this.httpclient.post('registerBidder', bidder);
  }



}
