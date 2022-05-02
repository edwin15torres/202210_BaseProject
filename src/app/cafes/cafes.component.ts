import { Component, OnInit } from '@angular/core';
//7. Importar modelo de datos
import { Cafes } from './cafes';
import { dataCafes } from './datacafes';

@Component({
  selector: 'app-cafes',
  templateUrl: './cafes.component.html',
  styleUrls: ['./cafes.component.css']
})
export class CafesComponent implements OnInit {
    // 7.1. Instanciar la clase
    cafes: Array<Cafes> =[];
  constructor() { }
   // 7.2. añadir un método get
   getCafesList(): Array<Cafes> {
    return dataCafes;
  }
  // 7.3 declarar la lista -- Crear un servicio
  ngOnInit() {
    this.cafes = this.getCafesList();
  }

}
