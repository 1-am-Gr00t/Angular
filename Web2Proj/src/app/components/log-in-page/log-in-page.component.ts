import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { stringToNumber } from '@syncfusion/ej2-angular-charts';
import { RegUser } from 'src/app/entities/regUser';
import { BehaviorSubject, empty } from 'rxjs';
import { SharedData } from 'src/app/services/shared-data';

@Component({
  selector: 'app-log-in-page',
  templateUrl: './log-in-page.component.html',
  styleUrls: ['./log-in-page.component.css']
})
export class LogInPageComponent implements OnInit {

 
  regUser: RegUser;
  
  //@Output() UserLogIn = new EventEmitter<RegUser>();


  constructor(private user: SharedData) { 
  }

  LogInUser()
  {
    this.regUser.email = (<HTMLInputElement> document.getElementById("user-email")).value;
    this.regUser.password = (<HTMLInputElement> document.getElementById("user-password")).value;

    //provera ispravnosti kljuca
    let arr = new Array<number>(3)
    let checkMail= new Array<string>(2);
    checkMail.fill("");

    checkMail= this.regUser.email.split('@');
    if(checkMail[1] != "")
    {
      let currentUser = new RegUser("", "");
      //proveriti da li User iz baze odgovara unetom Useru
      //greska ako ne postoji
    }
  }
  

  ngOnInit(): void {
    this.user.currentUser.subscribe(valUser => this.regUser = valUser)
  }
}
