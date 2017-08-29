"use strict";
//import { Xmen } from "./clases/xmen.class"
//import { Villanos } from "./clases/villanos.class"
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./clases/index");
var wolverine = new index_1.Xmen("Logan", "Wolverine");
var lex = new index_1.Villanos("Lex Lutor", "Conquistar el Mundo");
wolverine.imprimir();
lex.imprimirPlan();
