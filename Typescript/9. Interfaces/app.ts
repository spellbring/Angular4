interface Xmen{
  nombre:string,
  poder:string
}
//para evitar un paso excesivo de tipos de datos por los argumentos de la funcion,
// se ocupan interfaces.
function enviarMision(xmen: Xmen){
  console.log("Enviando a: " + xmen.nombre);
}

function enviarCuartel(xmen: Xmen){
  console.log("Enviando al cuartel: " + xmen.nombre);
}

let wolverine:Xmen = {
  nombre: "Wolverine",
  poder: "Regeneracion"
}

enviarMision(wolverine);
