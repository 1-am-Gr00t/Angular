import { AirCompanyProfileComponent } from 'src/app/components/air-company-profile/air-company-profile.component'
import { AirCompany } from 'src/app/entities/airCompany'
import { Seat } from 'src/app/entities/seat'
import { Destination } from 'src/app/entities/destination'
import { ServiceGrade } from 'src/app/entities/service-grade'

export class Flight {

    FlightID: number
    Departure: Date
    Landing: Date
    TravelTime: string
    TravelLength: number
    TicketPrice: number
    NumberOfChangeovers: number
    TicketDiscount: boolean
    NewTicketPrice: number
    AirCompany: AirCompany
    Seats: Seat[]
    FlightChangeovers: []
    ServiceGrades: ServiceGrade

}
