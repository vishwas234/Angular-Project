import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-land',
  templateUrl: './land.component.html',
  styleUrls: ['./land.component.css']
})
export class LandComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  submitLandForm(landForm: any): void {

    console.log(landForm);
    if (landForm.surveyno === '') {


    }
  }
}