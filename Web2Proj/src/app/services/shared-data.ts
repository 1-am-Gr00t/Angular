import { RegUser } from 'src/app/entities/regUser';
import { BehaviorSubject } from 'rxjs';

export class SharedData {
  regUser = new RegUser("def", "def");
  private User = new BehaviorSubject(this.regUser);
  currentUser = this.User.asObservable();

  
  ChangeUserInformation(checkUser: RegUser)
  {
    this.User.next(checkUser);
  }

}