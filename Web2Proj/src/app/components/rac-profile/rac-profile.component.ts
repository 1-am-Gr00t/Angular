import { Component, OnInit } from '@angular/core';
import { RAC } from 'src/app/entities/rac';
import { RACAdmin } from 'src/app/entities/rac-admin';
import { Vehicle } from 'src/app/entities/vehicle';

@Component({
  selector: 'app-rac-profile',
  templateUrl: './rac-profile.component.html',
  styleUrls: ['./rac-profile.component.css']
})
export class RACProfileComponent implements OnInit {

  rac: RAC;
  constructor() { 
  }

  ngOnInit(): void {
    this.rac = new RAC();
    this.rac.name = "TestRACName";
    this.rac.address = "TestRACAdress";
    this.rac.RACID = 1234567890;
    this.rac.description = "Ab in malam rem! Ab in malam rem! Ab in malam rem!";
    
    let testRACAdmin = new RACAdmin();
    testRACAdmin.email = "test.mail@not.real";
    testRACAdmin.password = "testPass";
    testRACAdmin.ID = 0;
    
    this.rac.RACAdmins = [testRACAdmin];

    let testVehicle = new Vehicle();
    testVehicle.ID = 1;
    testVehicle.naziv = "TestNaziv";
    testVehicle.marka = "TestMarka";
    testVehicle.prosecnaOcena = 9001;
    testVehicle.regBroj = 1234567890;
    testVehicle.tipVozila = "TestTip";
    testVehicle.cenaZaDan = 9001;
    testVehicle.godinaProizvodnje = 9001;

    let testVehicle1 = new Vehicle();
    testVehicle1.ID = 2;
    testVehicle1.naziv = "TestNaziv1";
    testVehicle1.marka = "TestMarka1";
    testVehicle1.prosecnaOcena = 9002;
    testVehicle1.regBroj = 1234567891;
    testVehicle1.tipVozila = "TestTip1";
    testVehicle1.cenaZaDan = 9002;
    testVehicle1.godinaProizvodnje = 9002;

    this.rac.vehicles = [testVehicle, testVehicle1];
  }

}
