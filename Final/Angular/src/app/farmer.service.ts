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
    return this.httpClient.get<Farmer[]>('/showAllFarmers');
  }
  registeruser(farmer: Farmer) {
    console.log("test call");
    return this.httpClient.post('/showAllFarmers', farmer);
  }


}
