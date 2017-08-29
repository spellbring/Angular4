"use strict";
function getNombre() {
    return "Jaime";
}
var nombre = "Juan";
var apellido = "Perez";
var edad = 23;
//let text = "Hola, " + nombre
var texto = "Hola, " + nombre + " " + apellido + " (" + edad + ")";
console.log(texto);
var texto2 = " " + (1 + 2) + " ";
console.log(texto2);
var texto3 = "Hola " + getNombre() + " ";
console.log(texto3);
