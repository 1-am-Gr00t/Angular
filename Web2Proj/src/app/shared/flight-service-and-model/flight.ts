import { Vreme } from 'src/app/Misc-classes/vreme';

export class Flight {

    FlightID: number
    Departure: Date
    Landing: Date
    TravelTime: Vreme
    TravelLength: number
    TicketPrice: number
    //ChangevoerDests: Array<string>
    NumberOfChangeovers: number

}
