import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { RegUser } from "src/app/entities/regUser"
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { SharedData } from 'src/app/services/shared-data';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 regUser: RegUser;
 @ViewChild('userForm') userProfileForm: NgForm;

  constructor(private user: SharedData) {}

  ngOnInit() {
    this.user.currentUser.subscribe(valUser => this.regUser = valUser)
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

  
    //PUT into DB
  }

  resetForm(){
    this.userProfileForm.reset();
  }
}
