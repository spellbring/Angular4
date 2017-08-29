"use strict";
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
//esta es la sintaxis de la destructuración de objetos si se quiere agregar
// un alias se delimita nombreVariable:alias
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
console.log(nombre, clave, poder);
//destructuración de arreglos
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
console.log(thor, capi, ironman);
