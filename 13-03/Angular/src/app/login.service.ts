import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http :HttpClient) { }
  public loginFarmerFromRemote(user : User): Observable<any>{
    return this.http.post<any>("http://localhost:8080/loginFarmer",user,{responseType:'text' as 'json'})
  }
  public loginBidderFromRemote(user : User): Observable<any>{
    return this.http.post<any>("http://localhost:8080/loginBidder",user,{responseType:'text' as 'json'})
  }
}
