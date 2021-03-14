import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  public registerFarmerFromRemote(user: User): Observable<any> {
    return this.http.post<any>('/registerFarmer', user, { responseType: 'text' as 'json' })
  }
  public registerBidderFromRemote(user: User): Observable<any> {
    return this.http.post<any>('/registerBidder', user, { responseType: 'text' as 'json' })
  }
}