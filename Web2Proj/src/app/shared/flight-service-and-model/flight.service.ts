import { Injectable } from '@angular/core';
import { Flight } from './flight';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flight: Flight;

  readonly rootURL = "https://localhost:5001/api";

  constructor(private http: HttpClient) { }

  getFlights() : Observable<Flight[]>{
    return this.http.get<Flight[]>(this.rootURL+"/flights")    
  }

  postFlight(flight : Flight) {
    return this.http.post(this.rootURL, flight);   
  }  
}
