import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Land } from './land';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor(private http :HttpClient) { }
  public addLandByFarmer(land : Land): Observable<any>{
    console.log("bala");
    return this.http.post<any>("http://localhost:8080/registerLand",land,{responseType:'text' as 'json'})
  }
  public viewAllLands(){
    console.log("bala");
    return this.http.get<any>("http://localhost:8080/getAllLands")
  }
}
