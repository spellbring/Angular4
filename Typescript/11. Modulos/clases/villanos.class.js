"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Villanos = (function () {
    function Villanos(nombre, plan) {
        this.nombre = nombre;
        this.plan = plan;
    }
    Villanos.prototype.imprimirPlan = function () {
        console.log("El plan es" + this.plan);
    };
    return Villanos;
}());
exports.Villanos = Villanos;
