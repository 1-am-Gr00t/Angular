import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaneAdmin } from 'src/app/entities/planeAdmin';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Flight } from 'src/app/shared/flight-service-and-model/flight';
import { FlightService } from 'src/app/shared/flight-service-and-model/flight.service';
import { Category, redrawElement } from '@syncfusion/ej2-angular-charts';
import { NgForm } from '@angular/forms';
import { Time, formatDate } from '@angular/common';
import { StringIdService } from 'src/app/services/string-id.service';
import { AirCompany } from 'src/app/entities/airCompany';
import { IntegerIdService } from 'src/app/services/integer-id.service';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-air-company-profile',
  templateUrl: './air-company-profile.component.html',
  styleUrls: ['./air-company-profile.component.css']
})
export class AirCompanyProfileComponent implements OnInit {
  
  @ViewChild('flightForm') flightForm: NgForm;
  @ViewChild('flightFormDel') flightFormDel: NgForm;
  @ViewChild('adminForm') adminProfileForm: NgForm;
  @ViewChild('airCompanyForm') airCompanyForm: NgForm;

  readonly destUrl = "Destinations";
  readonly airCompUrl = "AirCompanies";
  readonly ticketsSoldUrl = "SoldTickets";
  readonly luggagesUrl = "Luggages";
  readonly gradesUrl = "ServiceGrades";
  readonly seatsUrl = "Seats";
  planeAdmin: PlaneAdmin
  
  serviceGrades = [];
  luggages = [];
  soldTickets = [];
  flights = [];
  destinations = [];
  flight: Flight;
  idFligh: number;

  markers: Array<MapMarker>;
  marker: MapMarker;
  airCompany: AirCompany;
//#region chart properties
  title: string;
  chartData: Object[];
  XAxis : Object;
  YAxis : Object;
//#endregion
center: google.maps.LatLngLiteral
  constructor(private _flightService: FlightService, private _stringIdService: StringIdService,
    private _integerIdService: IntegerIdService) {
   this.flight = new Flight();
  }

  ngOnInit(): void {
   
    //#region services - GET
    this._flightService.getFlights()//gets all flights
    .subscribe((data: any) => {
    this.flights = data;
    }
      );
    this._stringIdService.getItems(this.destUrl)//gets all destinations
    .subscribe((data: any) => {
      this.destinations = data;
    }
      );
    this._stringIdService.getItem(this.airCompUrl, "Tesla")//treba se menjati nakon uspesnog logovanja admina!!, ie. adming.airCompany.Name
    .subscribe((data: any) => {
      this.airCompany = data;
     }
    );
    this._integerIdService.getItems(this.ticketsSoldUrl)
    .subscribe((data: any) => {
      this.soldTickets = data;
    });
    this._integerIdService.getItems(this.luggagesUrl)
    .subscribe((data: any) => {
      this.luggages = data;
    });
    this._integerIdService.getItems(this.luggagesUrl)
    .subscribe((data: any) => {
      this.serviceGrades = data;
    });
    
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
    //#region gmap marker
    this.marker.label = {color : 'red', text: "Markerk label"};
    this.marker.position = {
      lat: 17 + ((Math.random() - 0.5) * 2) / 10,
        lng: 45 + ((Math.random() - 0.5) * 2) / 10,
    };
    this.marker.title = "Adresa";
    this.marker.options = {
      animation: google.maps.Animation.BOUNCE 
    }
    this.markers.push(this.marker);
    //#endregion
  } 
  
  onFlightSubmit(f: NgForm){
    //POST to DB--why u no come here
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
    
    let exists = false;
    
    this.flight.TravelTime = travelTime;    
    this.flight.FlightID = parseInt(flightId);
    this.flight.Departure = new Date(departure);
    this.flight.Landing = new Date(landing);   
    this.flight.TicketPrice = parseInt(ticketPrice);
    this.flight.NumberOfChangeovers = parseInt(changeoverNo);
    this.flight.TravelLength = parseInt(travelLength);

    for(let i = 0; i < this.flights.length; i++){
      if(this.flights[i].FlightID == this.flight.FlightID){
        exists = true;
        this._flightService.putFlight(this.flight.FlightID, this.flight)
        .subscribe();
        break;
      }
    }

    if(!exists){
      this._flightService.postFlight(this.flight)
      .subscribe(flajt => this.flights.push(flajt));
    }
    
    this.flightForm.reset();
    //PUT to DB
  }
  
  editPlaneAdminProfile(){
    let name = (<HTMLInputElement> document.getElementById("padmin-name")).value;
    let lastname = (<HTMLInputElement> document.getElementById("padmin-lastname")).value;
    let email = (<HTMLInputElement> document.getElementById("padmin-email")).value;
    let city = (<HTMLInputElement> document.getElementById("padmin-city")).value;
    let phoneNumber = (<HTMLInputElement> document.getElementById("padmin-phoneNumber")).value;   
    //PUT to DB
  }

  AddDestinations(){
    //POST to DB
   
  }

  RemoveDestinations(){
    //DELETE from DB
  }

 
  DeleteFlight(){
    let flightId = (<HTMLInputElement> document.getElementById("flightIdDel")).value;
    this.idFligh = parseInt(flightId);

    this._flightService.deleteFligh(this.idFligh)
    .subscribe();
  }
  onFlightDel(f: NgForm){

  }  
}
