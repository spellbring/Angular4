//import { Xmen } from "./clases/xmen.class"
//import { Villanos } from "./clases/villanos.class"

import { Xmen, Villanos } from  "./clases/index"

let wolverine = new Xmen("Logan", "Wolverine");
let lex = new Villanos("Lex Lutor", "Conquistar el Mundo");
wolverine.imprimir();
lex.imprimirPlan();
