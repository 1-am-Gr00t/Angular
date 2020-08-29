import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { UserHomePageComponent } from "./components/user-home-page/user-home-page.component";
import { UserBookingComponent} from "./components/user-booking/user-booking.component";
import { ChooseSeatComponent } from './components/flightBookingSteps/choose-seat/choose-seat.component';
import { InviteFriendsComponent } from './components/flightBookingSteps/invite-friends/invite-friends.component';
import { PersonalDataComponent } from './components/flightBookingSteps/personal-data/personal-data.component';
import { RentCarComponent } from './components/flightBookingSteps/rent-car/rent-car.component';
import { SuccessfulReservationComponent } from './components/flightBookingSteps/successful-reservation/successful-reservation.component';

import { AirCompanyProfileComponent} from './components/air-company-profile/air-company-profile.component';
import { LogInPageComponent } from './components/log-in-page/log-in-page.component';
import { RegisterProfileComponent } from "./components/register-profile/register-profile.component";


const routes: Routes = [
  {
    path: "user-profile",
    component: UserProfileComponent
  },{
    path: "log-in-profile",
    component: LogInPageComponent
  },{
    path: "regiister-profile",
    component: RegisterProfileComponent
  },
  {
    path: "user-home-page",
    component: UserHomePageComponent
  },
  {
    path: "user-booking",
    children:[
      { path : "", component: UserBookingComponent },
      { path: "flightBookingSteps/choose-seat",
        children:[
          { path: "", component: ChooseSeatComponent },
          { path: "invite-friends",
            children:[
              { path: "", component: InviteFriendsComponent },
              { path: "personal-data",
                children:[
                  { path: "", component: PersonalDataComponent },
                  { path: "rent-car",
                    children:[
                      { path: "", component: RentCarComponent },
                      { path: "successful-reservation", component: SuccessfulReservationComponent } 
                    ]
                  },
                ]  
              },
            ]
          },
        ]
      },
    ]
  },  
  {
    path: "air-company-profile",
    component: AirCompanyProfileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
