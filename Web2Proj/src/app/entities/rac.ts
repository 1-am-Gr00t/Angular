import { Vehicle } from './vehicle';
import { RACAdmin } from './rac-admin';
import { VehicleComponent } from '../components/vehicle/vehicle.component';

export class RAC {
    RACID: number;
    name: string;
    description: string;
    address: string;
    //branches: string[];
    vehicles: Vehicle[];
    RACAdmins: RACAdmin[];

}
