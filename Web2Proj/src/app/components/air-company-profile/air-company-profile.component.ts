import { Component, OnInit } from '@angular/core';
import { PlaneAdmin } from 'src/app/entities/planeAdmin';
import { FormGroup, FormControl } from '@angular/forms';
import { Flight } from 'src/app/entities/flight'
@Component({
  selector: 'app-air-company-profile',
  templateUrl: './air-company-profile.component.html',
  styleUrls: ['./air-company-profile.component.css']
})
export class AirCompanyProfileComponent implements OnInit {

  planeAdmin: PlaneAdmin

  flights: Array<Flight>;

  companyName: string;
  address: string;
  destinacije: Array<string>;  

  constructor() {
    this.planeAdmin = new PlaneAdmin("ime", "prezimic", "ime.prezimic@mail", "New Now", "+381 666");
    this.companyName = "Swiss Air";
    this.address = "Marka Kraljevica";
    this.destinacije = new Array(2);
    this.flights = new Array();
    this.destinacije[0] = "Madrid";
    this.destinacije[1] = "Paris";
  }

  ngOnInit(): void {
  }

  onSubmit(){
  }

  editPlaneAdminProfile(){
    let name = (<HTMLInputElement> document.getElementById("padmin-name")).value;
    let lastname = (<HTMLInputElement> document.getElementById("padmin-lastname")).value;
    let email = (<HTMLInputElement> document.getElementById("padmin-email")).value;
    let city = (<HTMLInputElement> document.getElementById("padmin-city")).value;
    let phoneNumber = (<HTMLInputElement> document.getElementById("padmin-phoneNumber")).value;

    this.planeAdmin.name = name;
    this.planeAdmin.lastname = lastname;
    this.planeAdmin.email = email;
    this.planeAdmin.city = city;
    this.planeAdmin.phoneNumber = phoneNumber;
  }

  AddDestinations(){
    
  }

  RemoveDestinations(){}

  EditFlights(){}
}
