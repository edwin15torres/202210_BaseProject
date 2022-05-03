//6.1. Creación de la clase y exportarla
// exportarlo
export class Cafes {
  id: number;
  nombre: string;
  tipo: string;
  region: string;

  public constructor(id: number, nombre: string, tipo: string, region: string) {
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;

  }
 }


 //** */ Binding cafes.component.ts
