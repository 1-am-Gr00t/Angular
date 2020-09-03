import { Component, OnInit } from '@angular/core';
import { RegisteredUser } from 'src/app/entities/registeredUser';
import { SharedData } from 'src/app/services/shared-data'

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.css']
})
export class PasswordChangeComponent implements OnInit {

  regUser: RegisteredUser;
  oldPassword: string;
  password: string;
  rpassword: string;
  constructor(private user: SharedData) { }

  ngOnInit(): void {
    this.user.currentUser.subscribe(valUser => this.regUser = valUser)
  }

  NewPassword(){    
    this.oldPassword = (<HTMLInputElement> document.getElementById("old-password")).value;

    this.password = (<HTMLInputElement> document.getElementById("new-password")).value;
    this.rpassword = (<HTMLInputElement> document.getElementById("rnew-password")).value;

    if(this.oldPassword == this.regUser.password)
    {
      if(this.password == this.rpassword)
      {
        document.getElementById("incorrect-password").className = 'hidden';
        document.getElementById("no-match-password").className = 'hidden';
        //stavi u bazu      
      }
      else{
        document.getElementById("no-match-password").className = 'visible';
      }
    }
    else
    {
      document.getElementById("incorrect-password").className = 'visible';
    }

  }
}
