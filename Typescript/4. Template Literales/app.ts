function getNombre(){
  return "Jaime";
}


let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 23;

//let text = "Hola, " + nombre

let texto = `Hola, ${ nombre } ${ apellido } (${ edad })`;

console.log(texto);

let texto2:string =  ` ${ 1 + 2 } `;

console.log(texto2);

let texto3:string = `Hola ${getNombre() } `

console.log(texto3);
