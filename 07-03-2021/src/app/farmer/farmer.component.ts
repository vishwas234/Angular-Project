import { FarmerService } from './../farmer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.css']
})
export class FarmerComponent implements OnInit {
  farmers: string[];
  constructor(private farmerService: FarmerService) {

  }

  ngOnInit(): void {
    this.farmerService.getFarmers().subscribe(
      response => this.handleSuccessfulResponse(response),
    );
  }
  handleSuccessfulResponse(response) {
    this.farmers = response;
  }

}
