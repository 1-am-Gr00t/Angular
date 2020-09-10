import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
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
import { GoogleMapsModule } from '@angular/google-maps';
import { LogInPageComponent } from './components/log-in-page/log-in-page.component';
import { SharedData } from './services/shared-data';
import { RegisterProfileComponent } from './components/register-profile/register-profile.component';
import { VehicleComponent } from './components/vehicle/vehicle.component';
import { RACProfileComponent } from './components/rac-profile/rac-profile.component';
import { RACAdminProfileComponent } from './components/rac-admin-profile/rac-admin-profile.component';
import { PasswordChangeComponent } from './components/password-change/password-change.component';
import { UserFlightsComponent } from './user-flights/user-flights.component';
import { UserRacComponent } from './components/user-rac/user-rac.component';
import { UserFriendsComponent } from './components/user-friends/user-friends.component'


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
    SuccessfulReservationComponent,
    LogInPageComponent,
    RegisterProfileComponent,
    VehicleComponent,
    RACProfileComponent,
    RACAdminProfileComponent,
    PasswordChangeComponent,
    UserFlightsComponent,
    UserRacComponent,
    UserFriendsComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,          
    AppRoutingModule,
    ChartModule,
    HttpClientModule,
    GoogleMapsModule
  ],
  providers: [CategoryService, DateTimeService, ScrollBarService, ColumnSeriesService, LineSeriesService, 
    ChartAnnotationService, RangeColumnSeriesService, StackingColumnSeriesService,LegendService, TooltipService,
    FlightService, SharedData,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
