import { Component, OnInit } from '@angular/core';
import { RAC } from 'src/app/entities/rac';
import { RACAdmin } from 'src/app/entities/rac-admin';
import { Vehicle } from 'src/app/entities/vehicle';
import { IntegerIdService } from 'src/app/services/integer-id.service';

@Component({
  selector: 'app-rac-profile',
  templateUrl: './rac-profile.component.html',
  styleUrls: ['./rac-profile.component.css']
})
export class RACProfileComponent implements OnInit {

  rac: RAC;
  currentButton : number;
  constructor(private DBconnection: IntegerIdService) { 
  }

  ngOnInit(): void {
    this.rac = new RAC();
    this.DBconnection.getItem("RACServices", 1).subscribe((data: any) => {
      this.rac = data;
    });
    this.currentButton = 0;
    this.rac = new RAC();
    this.rac.name = "TestRACName";
    this.rac.address = "TestRACAdress";
    this.rac.racid = 1234567890;
    this.rac.description = "Ab in malam rem! Ab in malam rem! Ab in malam rem!";
    
    let testRACAdmin = new RACAdmin();
    testRACAdmin.email = "test.mail@not.real";
    testRACAdmin.password = "testPass";
    testRACAdmin.ID = 0;
    
    this.rac.racadmins = [testRACAdmin];

    let testVehicle = new Vehicle();
    testVehicle.id = 1;
    testVehicle.naziv = "TestNaziv";
    testVehicle.marka = "TestMarka";
    testVehicle.prosecnaOcena = 9001;
    testVehicle.regBroj = 1234567890;
    testVehicle.tipVozila = "TestTip";
    testVehicle.cenaZaDan = 9001;
    testVehicle.godinaProizvodnje = 9001;

    let testVehicle1 = new Vehicle();
    testVehicle1.id = 2;
    testVehicle1.naziv = "TestNaziv1";
    testVehicle1.marka = "TestMarka1";
    testVehicle1.prosecnaOcena = 9002;
    testVehicle1.regBroj = 1234567891;
    testVehicle1.tipVozila = "TestTip1";
    testVehicle1.cenaZaDan = 9002;
    testVehicle1.godinaProizvodnje = 9002;
    /*this.DBconnection.getItems("vehicles").subscribe((data: any) => {
      this.rac.Vehicles = data;
    });*/

    this.rac.vehicles = [testVehicle, testVehicle1];
  }
  
  MarkID(ID){
    this.currentButton = parseInt(ID) - 1;
  }
  
  ChangeVehicle()
  {
    let validateInformation : Array<boolean> = [true, true, true, true];
    let canClose = new Boolean(false);
    //this.currentButton = parseInt((<HTMLElement> document.getElementById("ChangeVehicle")).id);
    let checkVehicleInfo = this.rac.vehicles[this.currentButton];
    //provera da li je uneto nesto
    //#region IF
    //#region NAZIV
    if((<HTMLInputElement> 
      document.getElementById("promeniNaziv")).value.length == 0)
    {
      checkVehicleInfo.naziv =  this.rac.vehicles[this.currentButton].naziv;
    }else
    {
      checkVehicleInfo.naziv = 
       (<HTMLInputElement> document.getElementById("promeniNaziv")).value;
    }
    //#endregion
    //#region MARKA
    if((<HTMLInputElement> 
      document.getElementById("promeniMarku")).value.length == 0)
    {
      checkVehicleInfo.marka = this.rac.vehicles[this.currentButton].marka;
      //validateInformation[3] = false;
    }else
    {
      checkVehicleInfo.marka = 
        (<HTMLInputElement> document.getElementById("promeniMarku")).value;
    }
    //#endregion 
    //#region GODINA
    if((<HTMLInputElement> 
      document.getElementById("promeniGod")).value.length == 0)
    {
      checkVehicleInfo.godinaProizvodnje = this.rac.vehicles[this.currentButton].godinaProizvodnje;
      validateInformation[1] = false;
    }else
    {
      checkVehicleInfo.godinaProizvodnje = 
        parseInt((<HTMLInputElement> 
          document.getElementById("promeniGod")).value)
    }
    //#endregion
    //#region TIP
    if((<HTMLInputElement> 
        document.getElementById("promeniTip")).value.length == 0)
    {
      checkVehicleInfo.tipVozila = this.rac.vehicles[this.currentButton].tipVozila;
      //validateInformation[5] = false;
    }else
    {
      checkVehicleInfo.tipVozila = 
        (<HTMLInputElement> document.getElementById("promeniTip")).value;
    }
    //#endregion
    //#region CENA
    if((<HTMLInputElement> 
        document.getElementById("promeniCenu")).value.length == 0)
    {
      checkVehicleInfo.cenaZaDan = this.rac.vehicles[this.currentButton].cenaZaDan;
      validateInformation[2] = false;
    }else
    {
      checkVehicleInfo.cenaZaDan = 
        parseInt((<HTMLInputElement> 
          document.getElementById("promeniCenu")).value);
    }
    //#endregion
    //#region REGBR
    if((<HTMLInputElement> 
        document.getElementById("promeniRegBr")).value.length == 0)
    {
      checkVehicleInfo.regBroj = this.rac.vehicles[this.currentButton].regBroj;
      validateInformation[3] = false;
    }else
    {
      checkVehicleInfo.regBroj = 
        parseInt((<HTMLInputElement> 
          document.getElementById("promeniRegBr")).value);
    };
    //#endregion
    //#endregion IF

    //#region provera ispravnosti podataka   
    if(checkVehicleInfo.godinaProizvodnje < 0 )
    {
      
    }
    else
    {
      validateInformation[1] = true;
    }

    if(checkVehicleInfo.cenaZaDan <= 0 )
    {
      //frontend error
    }
    else
    {
      validateInformation[2] = true;
    }

    if(checkVehicleInfo.regBroj <= 0 )
    {
      //frontend error
    }
    else
    {
      validateInformation[3] = true;
    }
    //#endregion
    
    this.rac.vehicles[this.currentButton] = checkVehicleInfo;
    /*if(validateInformation[0] == validateInformation[1] == 
        validateInformation[2] == validateInformation[3] == true)
        {
          this.vehicle = checkVehicleInfo;
          //posalji u bazu
          //zatvori prozor
        }
    else
    {
      //ne zatvaraj prozor
    }*/
    
  }

}
