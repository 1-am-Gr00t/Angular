import { Component, OnInit } from '@angular/core';
import { RegUser } from "src/app/entities/regUser"
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  regUser: RegUser;
  profileForm : FormGroup;

  constructor() {    
    //for testing purposes    
      this.regUser = new RegUser("AWD", "Dawd", "aw@gm.com", "NS", "26165");  
    //this.regUser = regUser;  
    
  }

  ngOnInit() {
    this.initProfileForm();
  }

  private initProfileForm(){
    this.profileForm = new FormGroup({
      'profileName': new FormControl('default course name'),
      'profileLastName': new FormControl('default course description'),
      'profileCityName': new FormControl('0')
    });
    
  }  

  onSubmit(){}

  editProfileInfo(): void{
    let profileName = (<HTMLInputElement> document.getElementById("profileName")).value;
    let lastname = (<HTMLInputElement> document.getElementById("lastname")).value;
    let email = (<HTMLInputElement> document.getElementById("email")).value;
    let city = (<HTMLInputElement> document.getElementById("city")).value;
    let phoneNumber = (<HTMLInputElement> document.getElementById("phoneNumber")).value;

    this.regUser.name = profileName;
    this.regUser.lastname = lastname;
    this.regUser.email = email;
    this.regUser.city = city;
    this.regUser.phoneNumber = phoneNumber;
  }
}
