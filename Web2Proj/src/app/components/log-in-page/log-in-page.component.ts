import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { stringToNumber } from '@syncfusion/ej2-angular-charts';
import { RegisteredUser } from 'src/app/entities/registeredUser';
import { BehaviorSubject, empty } from 'rxjs';
import { SharedData } from 'src/app/services/shared-data';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

 
  regUser: RegisteredUser;  
  //@Output() UserLogIn = new EventEmitter<RegUser>();


  constructor(private user: SharedData) { 
  }

  LogInUser()
  {
    this.regUser.email = (<HTMLInputElement> document.getElementById("user-email")).value;
    this.regUser.password = (<HTMLInputElement> document.getElementById("user-password")).value;

    let currentUser = new RegisteredUser("", "");
      //proveriti da li User iz baze odgovara unetom Useru
      //greska ako ne postoji
      //regUser = dodji iz baze
    
  }
  

  ngOnInit(): void {
    this.user.currentUser.subscribe(valUser => this.regUser = valUser)
  }
}
