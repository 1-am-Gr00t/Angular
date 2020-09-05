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
import { Luggage } from 'src/app/entities/luggage';
import { SoldTicket } from 'src/app/entities/sold-ticket';

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
  @ViewChild('luggageFormAdd') luggageFormAdd: NgForm;
  @ViewChild('luggageUpdateForm') luggageUpdateForm: NgForm;

  readonly destUrl = "Destinations";
  readonly flightDestUrl = "FlightDestinations";
  readonly airCompUrl = "AirCompanies";
  readonly ticketsSoldUrl = "SoldTickets";
  readonly luggagesUrl = "Luggages";
  readonly gradesUrl = "ServiceGrades";
  readonly seatsUrl = "Seats";
  readonly flightAdmingUrl = "FlightAdmins";

  ////#region  To be populated on init
  serviceGrades = [];
  luggages = [];
  soldTickets = [];
  flights = [];
  destinations = [];
  flightDestinations = [];
  airCompany: AirCompany;
  flightAdmin : FlightAdmin;
  Income: number;
  ////#endregion

  //#endregion helper variables
  flight: Flight; //new flight from flight form
  idFligh: number;
  destChangeovers = []; //flight form presedanja
  luggageToUpdateId: number;
  dayAvg = 0;
  weekAvg = 0;
  monthAvg = 0;   
  //#endregion

//#region chart properties
  title: string;
  chartData: Object[];
  XAxis : Object;
  YAxis : Object;
//#endregion
  /*center: google.maps.LatLngLiteral
  markers: Array<MapMarker>;
  marker: MapMarker;*/
  constructor(private _flightService: FlightService, private _stringIdService: StringIdService,
    private _integerIdService: IntegerIdService) {
   this.flight = new Flight();
   this.airCompany = new AirCompany();
   this.airCompany.airCompanyId = 1;//test purpise
      
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
    this._integerIdService.getItem(this.airCompUrl, 1)//treba se menjati nakon uspesnog logovanja admina!!, ie. adming.airCompany.id
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
    this._integerIdService.getItems(this.gradesUrl)
    .subscribe((data: any) => {
      this.serviceGrades = data;
    });    
  }

  ngOnInit(): void {
   this.allGETmethods();     
   this.soldTicketsGraph();
    //#region gmap marker
    /*this.marker.label = {color : 'red', text: "Markerk label"};
    this.marker.position = {
      lat: 17 + ((Math.random() - 0.5) * 2) / 10,
        lng: 45 + ((Math.random() - 0.5) * 2) / 10,
    };
    this.marker.title = "Adresa";
    this.marker.options = {
      animation: google.maps.Animation.BOUNCE 
    }
    this.markers.push(this.marker);*/
    //#endregion
  } 
  changedGraphVal(){

    var date = new Date();
    date = (<HTMLInputElement> document.getElementById("ticketsSoldDateId")).valueAsDate;
    var yearNu = date.getFullYear();

    var ticketsSoldYear = 0;

    for(let ticket of this.soldTickets){
      if(ticket.airCompanyId != this.airCompany.airCompanyId) continue;     
      let dateSold = ticket.dateSold;

      let year = parseInt(dateSold[0]+dateSold[1]+dateSold[2]+dateSold[3]);
      
      if(yearNu ==  year){
        ticketsSoldYear+=1;
      }
    }
  
    if(yearNu%4 != 0)     //dal je prestupna
    this.dayAvg = ticketsSoldYear / 366;
    else
     this.dayAvg = ticketsSoldYear / 365;  

     this.weekAvg = ticketsSoldYear / 52;//weeks  
     this.monthAvg = ticketsSoldYear / 12;//months  

     this.chartData = [
      { raspon: 'Dnevno', prodatih: this.dayAvg },
      { raspon: 'Nedeljno', prodatih: this.weekAvg },
      { raspon: 'Mesecno', prodatih: this.monthAvg }
    ];
  }
  
  soldTicketsGraph(){
 //#region chart
    
    this.chartData = [
      { raspon: 'Dnevno', prodatih: this.dayAvg },
      { raspon: 'Nedeljno', prodatih: this.weekAvg },
      { raspon: 'Mesecno', prodatih: this.monthAvg }
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

  //#region  submitted forms

  onFlightSubmit(f: NgForm){
    //POST to DB--why u no come here
    //#region flight service - POST
    this._flightService.postFlight(this.flight)
    .subscribe(flajt => this.flights.push(flajt));
    //#endregion    
  }
  AddLuggage(f: NgForm){

  }
  onFlightDel(f: NgForm){
  }  
  updateLuggageForm(f: NgForm){}
  ////#endregion
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
    this.flight.AirCompanyId = this.airCompany.airCompanyId;
    //post to flightDest table
    for (let changeover of this.destChangeovers) {
      let FlightDestination = new FlightDestinations();
      FlightDestination.flightId = this.flight.FlightID;
      FlightDestination.destinationId = changeover;
          
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

    var previousEmail = this.flightAdmin.Email;

    this.flightAdmin.Name = name;
    this.flightAdmin.LastName = lastname;
    this.flightAdmin.Email = email;
    this.flightAdmin.City = city;
    this.flightAdmin.PhoneNumber = phoneNumber;

    this._stringIdService.putItem(this.flightAdmingUrl, this.flightAdmin, previousEmail)
    .subscribe();

    this.allGETmethods();
  }

  AddDestinations(){
    let destination = (<HTMLInputElement> document.getElementById("newDest")).value;
    let D = new Destination();
    D.Dest = destination;
    this._stringIdService.postItem(this.destUrl, D)
    .subscribe(dest => this.destinations.push(dest));
    
    this.allGETmethods();     
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
  
  AddLuggageToDB(){
    let id = (<HTMLInputElement> document.getElementById("luggageIdAdd")).value;
    let price = (<HTMLInputElement> document.getElementById("luggagePriceAdd")).value;
    let info = (<HTMLInputElement> document.getElementById("luggageInfoAdd")).value;
    
    var luggage = new Luggage();
    luggage.AirCompanyId = this.airCompany.airCompanyId;
    luggage.luggageID = parseInt(id);
    luggage.luggagePrice = parseInt(price);
    luggage.luggageDescription = info;
    
    this._integerIdService.postItem(this.luggagesUrl, luggage)
    .subscribe(lugedz => this.luggages.push(lugedz));    

    this.allGETmethods();     

  }
  saveLuggageId(id: number){
    this.luggageToUpdateId = id;
  }
  updateLuggage(){
    var lg = new Luggage();
    lg.luggageID = this.luggageToUpdateId;
    lg.AirCompanyId = this.airCompany.airCompanyId;

    let price = (<HTMLInputElement> document.getElementById("luggagePriceUpdate")).value;
    let info = (<HTMLInputElement> document.getElementById("luggageInfoUpdate")).value;

    lg.luggagePrice = parseInt(price);
    lg.luggageDescription = info;

    this._integerIdService.putItem(this.luggagesUrl, lg, lg.luggageID)
    .subscribe();

    this.allGETmethods();     

  }
  deleteLuggage(luggageId: number){
    this._integerIdService.deleteItem(this.luggagesUrl, luggageId)
    .subscribe();

    this.allGETmethods();     
  }  
  calculateIncome(){
    let dateFro = (<HTMLInputElement> document.getElementById("incomeFrom")).valueAsDate;
    let dateTo = (<HTMLInputElement> document.getElementById("incomeTo")).valueAsDate;

    var income = 0;
    for(let ticket of this.soldTickets){
      if(ticket.airCompanyId != this.airCompany.airCompanyId) continue;

      var date = new Date(ticket.dateSold);

      if(date >= dateFro && date <= dateTo)
        income += ticket.ticketPrice;
    }

    this.Income = income;
  }
}
