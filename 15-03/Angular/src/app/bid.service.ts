import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bid } from './bid';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private http: HttpClient, private router: Router) { }
  public addbid(bid: Bid): Observable<any> {
    console.log("bala");
    return this.http.post<any>('/registerBid', bid, { responseType: 'text' as 'json' })
  }
  public viewAllBids() {
    console.log("All Bids List")
    return this.http.get<any>('/getAllBids')
  }
  public deleteBid(surveyNumber: any): any {
    console.log("Deleted");
   // this.http.post('/deleteland', surveyNumber);
    return this.http.post('/delete', surveyNumber);
    }
  public updateBid(bid: Bid): any {
    console.log("Updated");
    return this.http.post('/updateBid', bid);
  }

}
