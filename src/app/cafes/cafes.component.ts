import { Component, OnInit } from '@angular/core';
import { Cafes } from './cafes';
//import { dataCafes } from './dataCafes';
//10. .import servicio
import { CafesService } from './cafes.service';


@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {
  // 10.1 Cambiar origen sel servicio --ir al mod. princ.

  constructor(private cafesService: CafesService) { }
  cafes: Array<Cafes> =[];

  //getCafesList(): Array<Cafes> {
   // return dataCafes;}

   getCafes() {
    this.cafesService.getCafes().subscribe(cafes => {
      this.cafes = cafes;
    });
  }
  ngOnInit() {
    this.getCafes();
  }

}
