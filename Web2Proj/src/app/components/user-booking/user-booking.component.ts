import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/shared/flight-service-and-model/flight';
@Component({
  selector: 'app-user-booking',
  templateUrl: './user-booking.component.html',
  styleUrls: ['./user-booking.component.css']
})
export class UserBookingComponent implements OnInit {

  availableFlights: Array<Flight>;
  reservedFlight: Flight;

  constructor() { }

  ngOnInit(): void {
  }

}
