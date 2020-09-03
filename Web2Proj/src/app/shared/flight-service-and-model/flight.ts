import { AirCompanyProfileComponent } from 'src/app/components/air-company-profile/air-company-profile.component'
import { AirCompany } from 'src/app/entities/airCompany'
import { Seat } from 'src/app/entities/seat'
import { Destination } from 'src/app/entities/destination'
import { ServiceGrade } from 'src/app/entities/service-grade'
import { HashLocationStrategy } from '@angular/common'

export class Flight {

    FlightID: number
    DepartureTime: Date
    LandingTime: Date
    TravelTime: string
    TravelLength: number
    TicketPrice: number
    NumberOfChangeovers: number
    TicketDisctount: boolean
    NewTicketPrice: number
    AirCompany: AirCompany
    ServiceGrades: ServiceGrade
   
}
