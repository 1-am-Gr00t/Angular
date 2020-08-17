import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaneAdmin } from 'src/app/entities/planeAdmin';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Flight } from 'src/app/shared/flight-service-and-model/flight';
import { FlightService } from 'src/app/shared/flight-service-and-model/flight.service';
import { Category } from '@syncfusion/ej2-angular-charts';
import { NgForm } from '@angular/forms';
import { Time, formatDate } from '@angular/common';

@Component({
  selector: 'app-air-company-profile',
  templateUrl: './air-company-profile.component.html',
  styleUrls: ['./air-company-profile.component.css']
})
export class AirCompanyProfileComponent implements OnInit {
  
  @ViewChild('flightForm') flightForm: NgForm;
  @ViewChild('adminForm') adminProfileForm: NgForm;
  @ViewChild('airCompanyForm') airCompanyForm: NgForm;

  planeAdmin: PlaneAdmin
  
  flights = [];
  flight: Flight;

  companyName: string;
  address: string;
  destinacije: Array<string>; 

//#region chart properties
  title: string;
  chartData: Object[];
  XAxis : Object;
  YAxis : Object;
//#endregion
  constructor(private _flightService: FlightService) {
    this.flight = new Flight();
    this.destinacije = new Array();
    this.planeAdmin = new PlaneAdmin("ime", "prezimic", "ime.prezimic@mail", "New Now", "+381 666");
    this.companyName = "Swiss Air";
    this.address = "Marka Kraljevica";
    this.destinacije[0]="Madrid";   
  }

  ngOnInit(): void {
   
    //#region flight service - GET
    this._flightService.getFlights()
    .subscribe(((data: any) => {
    this.flights = data;
  }
    ));
    //#endregion
    
    //#region chart    
    this.chartData = [
      { raspon: 'Dnevno', prodatih: 20 },
      { raspon: 'Nedeljno', prodatih: 800 },
      { raspon: 'Mesecno', prodatih: 3000 }
    ];
    this.title = "Prodate karte";
    this.XAxis = {
      title: 'Raspon',
      valueType: 'Category'
    }
    this.YAxis = {
      title: 'Prodatih'
    }
    //#endregion
  } 

  onFlightSubmit(f: NgForm){
    //POST to DB
    //#region flight service - POST
    this._flightService.postFlight(this.flight)
    .subscribe(flajt => this.flights.push(flajt));
    //#endregion

  }

  editFlightInfo(){
    let flightId = (<HTMLInputElement> document.getElementById("flightId")).value;
    let departure = (<HTMLInputElement> document.getElementById("departure")).value;
    let landing = (<HTMLInputElement> document.getElementById("landing")).value;
    let travelTime = (<HTMLInputElement> document.getElementById("travelTime")).value;
    let ticketPrice = (<HTMLInputElement> document.getElementById("ticketPrice")).value;
    let changeoverNo = (<HTMLInputElement> document.getElementById("changeoverNo")).value;
    let travelLength = (<HTMLInputElement> document.getElementById("travelLength")).value;

    let travelTimeSplit = travelTime.split(':');
    this.flight.TravelTime.hours = parseInt(travelTimeSplit[0]);
    this.flight.TravelTime.minutes = parseInt(travelTimeSplit[1]);

    this.flight.FlightID = parseInt(flightId);
    this.flight.Departure = new Date(departure);
    this.flight.Landing = new Date(landing);   
    this.flight.TicketPrice = parseInt(ticketPrice);
    this.flight.NumberOfChangeovers = parseInt(changeoverNo);
    this.flight.TravelLength = parseInt(travelLength);

    //PUT to DB
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

    //PUT to DB
  }

  AddDestinations(){
    //POST to DB
    this.destinacije[0] = "Madrid";
    this.destinacije[1] = "Paris";
    this.destinacije[2] = "Lisabon";
  }

  RemoveDestinations(){
    //DELETE from DB
  }

  EditFlights(){
    //PUT to DB
  }
}
