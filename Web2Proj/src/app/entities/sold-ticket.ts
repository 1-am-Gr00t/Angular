import { AirCompanyProfileComponent } from '../components/air-company-profile/air-company-profile.component';
import { AirCompany } from './airCompany';

export class SoldTicket {
    ticketId: number;
    dateSold: Date;
    ticketPrice: number;
    airCompanyId: number;

    /**
     *
     */
    constructor() {
      this.dateSold = new Date();
    }
}
