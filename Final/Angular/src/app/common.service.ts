import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public loginform: boolean;
  constructor() {
    this.loginform = false;
  }
  public setloginin(): void {
    this.loginform = true;
  }
  public getlogin() {
    return this.loginform;
  }



}
