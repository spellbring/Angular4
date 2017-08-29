let miFuncion = function( a:any ){
  return a;
}
console.log(`Normal ${miFuncion("Hola")}`);

let miFuncionF = ( a:any ) => a;

console.log(`ConFlecha ${miFuncionF("Hola")}`);


//mas de un argumento

let miFuncion2 = function(a:number, b:number){
  return a + b;
}

let miFuncion2F = (a:number , b:number) => a + b;


let miFuncion3 =  function(nombre:string){
  nombre = nombre.toUpperCase();
  return nombre;
}

let miFuncion3F = (nombre:string) => {
  nombre = nombre.toUpperCase();
  return nombre
}



let hulk ={
  nombre : "Hulk",
  smash(){

    setTimeout( () =>{
        console.log(this.nombre + " smash!!!");

    }, 1500);

  }
}

hulk.smash();
