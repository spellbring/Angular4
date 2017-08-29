class Avenger {

  nombre:string = "Sin nombre";
  equipo:string;
  nombreReal:string;


  puedePelear:boolean;
  peleasGanadas:number;

  constructor( nombre:string, equipo:string, nombreReal:string){
    this.nombre = nombre;
    this.equipo = equipo;
    this.nombreReal = nombreReal;
  }

}

let antman:Avenger = new Avenger("Antman","Cap","Scott Lang");


console.log(antman);
