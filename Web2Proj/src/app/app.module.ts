import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { ChartModule } from '@syncfusion/ej2-angular-charts';
import { DateFormatOptions } from '@syncfusion/ej2-base'
import { CategoryService, DateTimeService, ScrollBarService, ColumnSeriesService, LineSeriesService, 
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,LegendService, TooltipService
 } from '@syncfusion/ej2-angular-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AirCompanyProfileComponent } from './components/air-company-profile/air-company-profile.component';
import { UserBookingComponent } from './components/user-booking/user-booking.component';
import { QuickUserBookingComponent } from './components/quick-user-booking/quick-user-booking.component';
import { UserHomePageComponent } from './components/user-home-page/user-home-page.component';
import { ChooseSeatComponent } from './components/flightBookingSteps/choose-seat/choose-seat.component';
import { InviteFriendsComponent } from './components/flightBookingSteps/invite-friends/invite-friends.component';
import { PersonalDataComponent } from './components/flightBookingSteps/personal-data/personal-data.component';
import { RentCarComponent } from './components/flightBookingSteps/rent-car/rent-car.component';
import { SuccessfulReservationComponent } from './components/flightBookingSteps/successful-reservation/successful-reservation.component';

import { HttpClientModule } from "@angular/common/http";
import { FlightService } from  './shared/flight-service-and-model/flight.service';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    AirCompanyProfileComponent,
    UserBookingComponent,
    QuickUserBookingComponent,
    UserHomePageComponent,
    ChooseSeatComponent,
    InviteFriendsComponent,
    PersonalDataComponent,
    RentCarComponent,
    SuccessfulReservationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,    
    AppRoutingModule,
    ChartModule,
    HttpClientModule
  ],
  providers: [CategoryService, DateTimeService, ScrollBarService, ColumnSeriesService, LineSeriesService, 
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,LegendService, TooltipService,
    FlightService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
