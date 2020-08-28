import { Flight } from '../shared/flight-service-and-model/flight';

export class Seat {
    SeatID: String;
    SeatAvailability: SeatState
    FlightID: number;
    Flight: Flight;
}
enum SeatState{
    Unavailable,
    Available,
    Reserved,
}