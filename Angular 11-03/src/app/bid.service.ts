import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bid } from './bid';

@Injectable({
  providedIn: 'root'
})
export class BidService {

  constructor(private http: HttpClient) { }
  public addbid(bid: Bid): Observable<any> {
    console.log("bala");
    return this.http.post<any>("http://localhost:8080/registerBid", bid, { responseType: 'text' as 'json' })
  }
  public viewAllBids() {
    console.log("getBids");
    return this.http.get<any>("http://localhost:8080/getAllBids")
  }
}
