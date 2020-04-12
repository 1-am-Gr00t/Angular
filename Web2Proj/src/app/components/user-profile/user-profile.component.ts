import { Component, OnInit } from '@angular/core';
import {RegUser} from "src/app/entities/regUser"

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  regUser: RegUser;

  constructor() {
    //for testing purposes
      this.regUser = new RegUser("AWD", "Dawd", "aw@gm.com", "NS", 26165);  
    //this.regUser = regUser;  
  }

  ngOnInit(): void {
  }

}
