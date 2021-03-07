import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  farmer: any
  constructor() {
    this.farmer = [
      { farmerName: "rrrr", address: 'Pashsdga', mobile: 999999, loginId: 'pasha123', password: 'password' },

    ];
  }

  ngOnInit(): void {
  }

}
