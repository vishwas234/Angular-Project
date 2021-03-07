import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  constructor(public httpClient: HttpClient) { }
  register(farmer: any): any {
    return this.httpClient.post('registerFarmer', farmer);
  }

}
