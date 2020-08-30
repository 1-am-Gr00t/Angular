import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/entities/vehicle'

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {

  vehicle: Vehicle;
  constructor() { }

  ngOnInit(): void {
    this.vehicle = new Vehicle();
    this.vehicle.naziv = "TestNaziv";
    this.vehicle.marka = "TestMarka";
    this.vehicle.prosecnaOcena = 9001;
    this.vehicle.regBroj = 1234567890;
    this.vehicle.tipVozila = "TestTip";
    this.vehicle.cenaZaDan = 9001;
    this.vehicle.godinaProizvodnje = 9001;
  }

}
