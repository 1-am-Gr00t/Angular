import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flight: Flight;
  flights: Flight[];

  readonly rootURL = "http://localhost:4200"

  constructor(private http: HttpClient) { }

  getFlights() : Observable<Flight[]>{
    return this.http.get<Flight[]>(this.rootURL);
  }

  postFlight(flight : Flight){
    return this.http.post(this.rootURL, flight);
  }
 // postFlight(flight: Flight){
 //   return this.http.post(this.rootURL+'/')
 // }
}
