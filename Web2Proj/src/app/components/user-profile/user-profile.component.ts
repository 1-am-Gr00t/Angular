import { Component, OnInit, ViewChild } from '@angular/core';
import { RegUser } from "src/app/entities/regUser"
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  regUser: RegUser;
 @ViewChild('userForm') userProfileForm: NgForm;

  constructor() {    
    //for testing purposes    
      this.regUser = new RegUser("AWD", "Dawd", "aw@gm.com", "NS", "26165");      
  }

  ngOnInit() {
  }


  onSubmit(f: NgForm){
    //POST into DB
  }

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

    //PUT into DB
  }

  resetForm(){
    this.userProfileForm.reset();
  }
}
