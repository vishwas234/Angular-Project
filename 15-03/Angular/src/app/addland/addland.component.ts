import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Land } from '../land';
import { LandService } from '../land.service';

@Component({
  selector: 'app-addland',
  templateUrl: './addland.component.html',
  styleUrls: ['./addland.component.css']
})
export class AddlandComponent implements OnInit {
  land = new Land();
  constructor(private serv: LandService, private router: Router) {
  }


  ngOnInit(): void {
  }
  addLand() {
    this.serv.addLandByFarmer(this.land).subscribe(
      data => console.log("response received"),
      error => console.log("exception was occured")
    )
    this.router.navigate(['viewlandbyfarmer']);
  }

}
