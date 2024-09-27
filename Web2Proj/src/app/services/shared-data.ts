import { RegisteredUser } from 'src/app/entities/registeredUser';
import { BehaviorSubject } from 'rxjs';
import { Vehicle } from '../entities/vehicle';
import { FlightAdmin } from '../entities/flightAdmin';

export class SharedData {
  regUser = new RegisteredUser("def", "def");
  private User = new BehaviorSubject(this.regUser);
  currentUser = this.User.asObservable();
  
  flightAdmin = new FlightAdmin();
  private FAdmin = new BehaviorSubject(this.flightAdmin);
  currFAdmin = this.FAdmin.asObservable();

  ChangeUserInformation(checkUser: RegisteredUser)
  {
    this.User.next(checkUser);
  }

  ChangeFlightAdminInformation(flightAdmin : FlightAdmin){
    this.FAdmin.next(flightAdmin);
  }

}