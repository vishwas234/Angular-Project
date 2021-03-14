import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditanddelService {

  constructor(public httpclient: HttpClient) { }
  deleteBid(){
    return this.httpclient.delete('http://localhost:8080/deleteBid/');
  }
  updateBid(){

  }
}
