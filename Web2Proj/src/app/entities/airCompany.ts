import { Flight } from 'src/app/shared/flight-service-and-model/flight';
import { FlightAdmin } from './flightAdmin';
import { SoldTicket } from './sold-ticket';
import { Luggage } from './luggage';

export class AirCompany{
    name: string;
    address: string;
    promoDescription: string;
    meanGrade: number;
    flightAdmins: FlightAdmin[];
    soldTickets: SoldTicket[];
    flights: Flight[];
    luggage: Luggage[];
}
