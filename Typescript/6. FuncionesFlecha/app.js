"use strict";
var miFuncion = function (a) {
    return a;
};
console.log("Normal " + miFuncion("Hola"));
var miFuncionF = function (a) { return a; };
console.log("ConFlecha " + miFuncionF("Hola"));
//mas de un argumento
var miFuncion2 = function (a, b) {
    return a + b;
};
var miFuncion2F = function (a, b) { return a + b; };
var miFuncion3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFuncion3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () {
            console.log(_this.nombre + " smash!!!");
        }, 1500);
    }
};
hulk.smash();
