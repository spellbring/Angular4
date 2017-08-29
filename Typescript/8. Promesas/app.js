"use strict";
//Permite ejecutar tareas o algun codigo o alguna función cuando una tarea
// asincrona es terminada.
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa Terminada");
        //resolve();
        reject();
    }, 1500);
});
prom1.then(function () {
    console.log("Ejecutarme cuando se termine bien!");
}, function () {
    console.error("Ejecutar si todo sale mal");
});
