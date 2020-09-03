import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { stringToNumber } from '@syncfusion/ej2-angular-charts';
import { BehaviorSubject, empty } from 'rxjs';
import { SharedData } from 'src/app/services/shared-data';
import { RegisteredUser } from 'src/app/entities/registeredUser';
@Component({
  selector: 'app-register-profile',
  templateUrl: './register-profile.component.html',
  styleUrls: ['./register-profile.component.css']
})
export class RegisterProfileComponent implements OnInit {

 
  regUser: RegisteredUser;
  constructor(private user: SharedData) { 
  }

  RegisterUser()
  {
    this.regUser.name = (<HTMLInputElement> document.getElementById("user-name")).value;
    this.regUser.lastname = (<HTMLInputElement> document.getElementById("user-lastname")).value;
    this.regUser.phoneNumber = (<HTMLInputElement> document.getElementById("user-number")).value;
    this.regUser.city = (<HTMLInputElement> document.getElementById("user-city")).value;
    this.regUser.email = (<HTMLInputElement> document.getElementById("user-email")).value;
    this.regUser.password = (<HTMLInputElement> document.getElementById("user-password")).value;
    
    //provera ispravnosti kljuca
    let arr = new Array<number>(3)
    let checkMail= new Array<string>(2);
    checkMail.fill("");

    checkMail= this.regUser.email.split('@');
    if(checkMail[1] != "")
    {
      let currentUser = new RegisteredUser("", "");
      //proveriti da li User iz baze odgovara unetom Useru
      //greska ako postoji
    }
    
  }
  

  ngOnInit(): void {
    this.user.currentUser.subscribe(valUser  => this.regUser = valUser)
  }

}
