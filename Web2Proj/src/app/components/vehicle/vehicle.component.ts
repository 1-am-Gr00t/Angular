import { Component, OnInit, Input} from '@angular/core';
import { Vehicle } from 'src/app/entities/vehicle'
import { SharedData } from 'src/app/services/shared-data'
import { RegisteredUser } from 'src/app/entities/registeredUser';
import { stringToNumber } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  regUser: RegisteredUser;
  @Input() vehicle: Vehicle;
  constructor(private user: SharedData) { }

  ngOnInit(): void {
    this.user.currentUser.subscribe(valUser=> this.regUser = valUser)
  }


}
