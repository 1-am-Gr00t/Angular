import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AirCompanyProfileComponent } from './components/air-company-profile/air-company-profile.component';
import { RegUserProfileComponent } from './components/reg-user-profile/reg-user-profile.component';
import { UserBookingComponent } from './components/user-booking/user-booking.component';
import { QuickUserBookingComponent } from './components/quick-user-booking/quick-user-booking.component';
import { SearchAndFilterFlightComponent } from './components/search-and-filter-flight/search-and-filter-flight.component';
import { LocationDisplayComponent } from './components/location-display/location-display.component';

@NgModule({
  declarations: [
    AppComponent,    
    UserProfileComponent,
    AirCompanyProfileComponent,
    RegUserProfileComponent,
    UserBookingComponent,
    QuickUserBookingComponent,
    SearchAndFilterFlightComponent,
    LocationDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
