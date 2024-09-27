import { Component, OnInit } from '@angular/core';
import { RACAdmin } from 'src/app/entities/rac-admin'
import { RAC } from 'src/app/entities/rac';
import { Vehicle } from 'src/app/entities/vehicle';

@Component({
  selector: 'app-rac-admin-profile',
  templateUrl: './rac-admin-profile.component.html',
  styleUrls: ['./rac-admin-profile.component.css']
})
export class RACAdminProfileComponent implements OnInit {

  admin: RACAdmin;
  testVehicle0: Vehicle;
  testVehicle1: Vehicle;

  constructor() { }

  ngOnInit(): void {
    this.admin = new RACAdmin();
    this.admin.ID = 0;
    this.admin.email = "test.mail@not.real";
    this.admin.password = "TestRACAdminPasword";

    this.admin.RAC = new RAC();
    this.admin.RAC.name = "TestRACName";
    this.admin.RAC.description = "Ab in malam rem?";
    this.admin.RAC.address = "TestAddress";

    this.testVehicle0 = new Vehicle();
    this.testVehicle1 = new Vehicle();

    this.testVehicle1.id = 1;
    this.testVehicle1.id = 2;

    this.admin.RAC.vehicles = [this.testVehicle0, this.testVehicle1];
    
  }

  ChangePassword(){


  }

}
