import { RegisteredUser } from 'src/app/entities/registeredUser';
import { BehaviorSubject } from 'rxjs';

export class SharedData {
  regUser = new RegisteredUser("def", "def");
  private User = new BehaviorSubject(this.regUser);
  currentUser = this.User.asObservable();

  
  ChangeUserInformation(checkUser: RegisteredUser)
  {
    this.User.next(checkUser);
  }

}