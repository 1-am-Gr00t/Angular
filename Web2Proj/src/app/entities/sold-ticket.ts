import { AirCompanyProfileComponent } from '../components/air-company-profile/air-company-profile.component';
import { AirCompany } from './airCompany';

export class SoldTicket {
    TicketId: number;
    DateSold: Date;
    TicketPrice: number;
    AirCompany: string;
}
