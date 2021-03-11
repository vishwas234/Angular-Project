import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
export class Farmer {
  constructor(
    public farmerId: string,
    public farmerName: string,
    public address: string,
    public mobile: string,
    public loginId: string,
    public password: string,
    public name: string,

  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(public httpClient: HttpClient) { }

  getFarmers() {
    console.log("test call");
    return this.httpClient.get<Farmer[]>('http://localhost:8080/showAllFarmers');
  }
  registeruser(farmer: Farmer) {
    console.log("test call");
    // return this.httpClient.post<Farmer[]>('http://localhost:8080/showAllFarmers');
    return this.httpClient.post('http://localhost:8080/showAllFarmers', farmer);
  }


}
