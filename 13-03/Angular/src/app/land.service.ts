import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Land } from './land';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor(private http: HttpClient, private router: Router) { }
  public addLandByFarmer(land: Land): Observable<any> {
    console.log("bala");
    return this.http.post<any>('/registerLand', land, { responseType: 'text' as 'json' })

  }
  public viewAllLands() {
    console.log("bala");
    // this.router.navigate(['viewlandbyfarmer']);
    return this.http.get<any>('/getAllLands')

  }

  public delete(land: any): any {
    console.log("Deleted");
    return this.http.post('/deleteland', land);
  }

  public editland(land: any) {
    console.log("editted");
    return this.http.post<any>('/editland', land)
  }
}
