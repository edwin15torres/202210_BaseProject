//6.1. Creación de la clase y exportarla
// exportarlo
export class Cafes {
  idd: number;
  nombre: string;
  tipo: string;
  region: string;

  public constructor(idd: number, nombre: string, tipo: string, region: string) {
    this.idd = idd;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;

  }
 }


 //** */ Binding course.component.ts
