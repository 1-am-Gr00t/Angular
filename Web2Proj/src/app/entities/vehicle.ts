import { DateTime } from '@syncfusion/ej2-angular-charts';

export class Vehicle {
    id: number;
    racid: number;
    datesReserved: DateTime[];

    naziv: string;
    marka: string;
    regBroj: number;
    godinaProizvodnje: number;
    tipVozila: string;
    prosecnaOcena: number;
    cenaZaDan: number;    

    
}
