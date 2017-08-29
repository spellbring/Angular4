let avenger = {
  nombre: "Steve",
  clave:"Capitan America",
  poder:"Droga"
}

//esta es la sintaxis de la destructuración de objetos si se quiere agregar
// un alias se delimita nombreVariable:alias
let { nombre, clave, poder } = avenger;

console.log(nombre, clave, poder);


//destructuración de arreglos
let avengers:string[] =["Thor","Steve","Tony"];

let[thor, capi, ironman] = avengers;

console.log(thor, capi, ironman);
