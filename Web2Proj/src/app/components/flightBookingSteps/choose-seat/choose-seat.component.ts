import { Component, OnInit } from '@angular/core';
import { stringToNumber } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-choose-seat',
  templateUrl: './choose-seat.component.html',
  styleUrls: ['./choose-seat.component.css']
})
export class ChooseSeatComponent implements OnInit {

  constructor() { }

  numberOfReservations: number;  

  seatNumbers: string[] = ["1", "2", "3", "4", "5"];
  seatLetters: string[] = ["A", "B", "C", "D", "E", "F"];

  ngOnInit(): void {
  }

  multipleReservations() : void{
   this.numberOfReservations = 0;
   for (var i in this.seatNumbers) {
     for (let j in this.seatLetters) {
       let seat = (<HTMLInputElement>document.getElementById(this.seatNumbers[i].concat(this.seatLetters[j]))).checked;
       if(seat){ 
         this.numberOfReservations += 1;
       }
     }
    }      
  }
}
