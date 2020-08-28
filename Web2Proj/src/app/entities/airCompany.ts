import { Flight } from 'src/app/shared/flight-service-and-model/flight';
import { PlaneAdmin } from './planeAdmin';
import { SoldTicket } from './sold-ticket';
import { Luggage } from './luggage';

export class AirCompany{
    name: String;
    address: String;
    promoDescription: String;
    meanGrade: number;
    flightAdmins: PlaneAdmin[];
    soldTickets: SoldTicket[];
    flights: Flight[];
    luggage: Luggage[];
}
