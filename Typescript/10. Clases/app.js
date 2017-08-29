"use strict";
var Avenger = (function () {
    function Avenger(nombre, equipo, nombreReal) {
        this.nombre = "Sin nombre";
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }
    return Avenger;
}());
var antman = new Avenger("Antman", "Cap", "Scott Lang");
console.log(antman);
