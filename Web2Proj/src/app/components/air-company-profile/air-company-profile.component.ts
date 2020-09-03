import { Component, OnInit, ViewChild } from '@angular/core';
import { FlightAdmin } from 'src/app/entities/flightAdmin';
import { FormGroup, FormControl, Validators, FormBuilder, NgModel } from '@angular/forms';
import { Flight } from 'src/app/shared/flight-service-and-model/flight';
import { FlightService } from 'src/app/shared/flight-service-and-model/flight.service';
import { Category, redrawElement } from '@syncfusion/ej2-angular-charts';
import { NgForm } from '@angular/forms';
import { Time, formatDate } from '@angular/common';
import { StringIdService } from 'src/app/services/string-id.service';
import { AirCompany } from 'src/app/entities/airCompany';
import { IntegerIdService } from 'src/app/services/integer-id.service';
import { GoogleMap, MapMarker } from '@angular/google-maps';
import { Destination } from 'src/app/entities/destination';
import { FlightDestinations } from 'src/app/entities/flightDestinations';

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
  @ViewChild('addDestFrom') addDestForm: NgForm;

  readonly destUrl = "Destinations";
  readonly flightDestUrl = "FlightDestinations";
  readonly airCompUrl = "AirCompanies";
  readonly ticketsSoldUrl = "SoldTickets";
  readonly luggagesUrl = "Luggages";
  readonly gradesUrl = "ServiceGrades";
  readonly seatsUrl = "Seats";
  
  ////#region  To be populated on init
  serviceGrades = [];
  luggages = [];
  soldTickets = [];
  flights = [];
  destinations = [];
  flightDestinations = [];
  airCompany: AirCompany;
  flightAdmin : FlightAdmin;
  ////#endregion

  flight: Flight; //new flight from flight form
  idFligh: number;
  destChangeovers = []; //flight form presedanja
  
  
//#region chart properties
  title: string;
  chartData: Object[];
  XAxis : Object;
  YAxis : Object;
//#endregion
  center: google.maps.LatLngLiteral
  markers: Array<MapMarker>;
  marker: MapMarker;
  constructor(private _flightService: FlightService, private _stringIdService: StringIdService,
    private _integerIdService: IntegerIdService) {
   this.flight = new Flight();
  }

  allGETmethods(){
    this._flightService.getFlights()//gets all flights
    .subscribe((data: any) => {
      this.flights = data;
    }
      );
    this._stringIdService.getItems(this.flightDestUrl)//gets all flight destinations
    .subscribe((data: any) => {
      this.flightDestinations = data;
    }
      );     
    this._stringIdService.getItems(this.destUrl)//gets all destinations
    .subscribe((data: any) => {
      this.destinations = data;
    }
      );
    /*this._stringIdService.getItem(this.airCompUrl, this.flightAdmin.AirCompany)//treba se menjati nakon uspesnog logovanja admina!!, ie. adming.airCompany.Name
    .subscribe((data: any) => {
      this.airCompany = data;
      }
    );*/
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
  }

  ngOnInit(): void {
   this.allGETmethods();     
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
    let travelLength = (<HTMLInputElement> document.getElementById("travelLength")).value;
    let discount =  (<HTMLInputElement> document.getElementById("discount"));

    let ticketDiscount = "-1";
    if(discount.checked){
      this.flight.TicketDisctount = true;
      ticketDiscount = (<HTMLInputElement> document.getElementById("ticketDiscount")).value;
    }
    else  this.flight.TicketDisctount = false;

    let exists = false;
    
    this.flight.TravelTime = travelTime;    
    this.flight.FlightID = parseInt(flightId);
    this.flight.DepartureTime = new Date(departure);
    this.flight.LandingTime = new Date(landing);   
    this.flight.TicketPrice = parseInt(ticketPrice);
    this.flight.TravelLength = parseInt(travelLength);
    this.flight.NewTicketPrice = parseInt(ticketDiscount)

    //post to flightDest table
    for (let changeover of this.destChangeovers) {
      let FlightDestination = new FlightDestinations();
      FlightDestination.FlightId = this.flight.FlightID;
      FlightDestination.DestinationId = changeover;
          
      this.flightDestinations.push(FlightDestination);
      }
      this.flight.NumberOfChangeovers = this.destChangeovers.length;



    for(let flajt of this.flights){
      if (flajt.flightID == this.flight.FlightID) {
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
    
    //post changeovers to table 
    for(let fd of this.flightDestinations){
      this._stringIdService.postItem(this.flightDestUrl, fd);
    }

    this.flightForm.reset();
    this.destChangeovers = [];
    }
  
  editFlightAdminProfile(){
    let name = (<HTMLInputElement> document.getElementById("padmin-name")).value;
    let lastname = (<HTMLInputElement> document.getElementById("padmin-lastname")).value;
    let email = (<HTMLInputElement> document.getElementById("padmin-email")).value;
    let city = (<HTMLInputElement> document.getElementById("padmin-city")).value;
    let phoneNumber = (<HTMLInputElement> document.getElementById("padmin-phoneNumber")).value;   
    //PUT to DB
    this.allGETmethods();
  }

  AddDestinations(){
    let destination = (<HTMLInputElement> document.getElementById("newDest")).value;
    let D = new Destination();
    D.Dest = destination;
    this._stringIdService.postItem(this.destUrl, D)
    .subscribe(dest => this.destinations.push(dest));
    
  }

  RemoveDestinations(dest: string){
    //DELETE from DB
  
    let D = new Destination();
    D.Dest = dest;
    this._stringIdService.deleteItem(this.destUrl, D.Dest)
    .subscribe();
    this.allGETmethods();
  }

  DeleteFlight(){
    let flightId = (<HTMLInputElement> document.getElementById("flightIdDel")).value;
    this.idFligh = parseInt(flightId);

    this._flightService.deleteFligh(this.idFligh)
    .subscribe();
    this.allGETmethods();
  }

  onFlightDel(f: NgForm){
    this.allGETmethods();
  }  

  addChangeovers(changeover){
    this.destChangeovers.push(changeover);

  }
  RemoveChangeover(changeover){
    let indx = this.destChangeovers.indexOf(changeover);
    this.destChangeovers.splice(indx, 1);
  }
  resetFlightForm(){
    this.flightForm.reset();
    this.destChangeovers = [];
  }
}
