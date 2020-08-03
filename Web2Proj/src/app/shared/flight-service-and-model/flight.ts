import { Time } from '@angular/common';

export class Flight {

    FlightID: number
    Departure: Date
    Landing: Date
    TravelTime: Time
    TravelLength: number
    TicketPrice: number
    //ChangevoerDests: Array<string>
    NumberOfChangeovers: number

    constructor(){}
}
