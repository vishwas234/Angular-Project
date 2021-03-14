import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  public loginFarmerFromRemote(user: User): Observable<any> {
    return this.http.post<any>('/loginFarmer', user, { responseType: 'text' as 'json' })
  }
  public loginBidderFromRemote(user: User): Observable<any> {
    return this.http.post<any>('/loginBidder', user, { responseType: 'text' as 'json' })
  }
}
