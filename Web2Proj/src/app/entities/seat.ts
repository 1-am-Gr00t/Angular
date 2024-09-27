import { Flight } from '../shared/flight-service-and-model/flight';

export class Seat {
    seatID: string;
    seatAvailability: SeatState
    flightID: number;
}
export enum SeatState{
    Unavailable,
    Available,
    Reserved,
}