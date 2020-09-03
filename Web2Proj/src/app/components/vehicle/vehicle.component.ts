import { Component, OnInit, Input} from '@angular/core';
import { Vehicle } from 'src/app/entities/vehicle'
import { SharedData } from 'src/app/services/shared-data'
import { RegisteredUser } from 'src/app/entities/registeredUser';

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

  ChangeVehicle()
  {
    let validateInformation : Array<boolean> = [true, true, true, true];
    let canClose = new Boolean(false);
    let checkVehicleInfo = new Vehicle();
    
    //provera da li je uneto nesto
    //#region IF
    if((<HTMLInputElement> document.getElementById("promeniID")).value.length == 0)
    {
      checkVehicleInfo.ID = this.vehicle.ID;
      validateInformation[0] = false;
    }else
    {
      checkVehicleInfo.ID = parseInt((<HTMLInputElement> document.getElementById("promeniID")).value)
    }
    //#endregion
    //#region NAZIV
    if((<HTMLInputElement> document.getElementById("promeniNaziv")).value.length == 0)
    {
      checkVehicleInfo.naziv =  this.vehicle.naziv;
    }else
    {
      checkVehicleInfo.naziv = (<HTMLInputElement> document.getElementById("promeniNaziv")).value;
    }
    //#endregion
    //#region MARKA
    if((<HTMLInputElement> document.getElementById("promeniMarku")).value.length == 0)
    {
      checkVehicleInfo.marka = this.vehicle.marka;
      //validateInformation[3] = false;
    }else
    {
      checkVehicleInfo.marka = (<HTMLInputElement> document.getElementById("promeniMarku")).value;
    }
    //#endregion 
    //#region GODINA
    if((<HTMLInputElement> document.getElementById("promeniGod")).value.length == 0)
    {
      checkVehicleInfo.godinaProizvodnje = this.vehicle.godinaProizvodnje;
      validateInformation[1] = false;
    }else
    {
      checkVehicleInfo.godinaProizvodnje = 
      parseInt((<HTMLInputElement> document.getElementById("promeniGod")).value)
    }
    //#endregion
    //#region TIP
    if((<HTMLInputElement> document.getElementById("promeniTip")).value.length == 0)
    {
      checkVehicleInfo.tipVozila = this.vehicle.tipVozila;
      //validateInformation[5] = false;
    }else
    {
      checkVehicleInfo.tipVozila = (<HTMLInputElement> document.getElementById("promeniTip")).value;
    }
    //#endregion
    //#region CENA
    if((<HTMLInputElement> document.getElementById("promeniCenu")).value.length == 0)
    {
      checkVehicleInfo.cenaZaDan = this.vehicle.cenaZaDan;
      validateInformation[2] = false;
    }else
    {
      checkVehicleInfo.cenaZaDan = 
                    parseInt((<HTMLInputElement> document.getElementById("promeniCenu")).value);
    }
    //#endregion
    //#region REGBR
    if((<HTMLInputElement> document.getElementById("promeniRegBr")).value.length == 0)
    {
      checkVehicleInfo.regBroj = this.vehicle.regBroj;
      validateInformation[3] = false;
    }else
    {
      checkVehicleInfo.regBroj = parseInt((<HTMLInputElement> document.getElementById("promeniRegBr")).value);
    };
    //#endregion
    //#endregion IF

    //#region provera ispravnosti podataka   
    if(checkVehicleInfo.godinaProizvodnje < 0 )
    {
      //frontend error
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
    
    this.vehicle = checkVehicleInfo;
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
