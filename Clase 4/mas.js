// TIPO DATO BOOLENA (TRUE, FALSE)

var bandera = false;
console.log(typeof bandera);

// BOOLEAN NO IMPORTA SI ES TRUE O FALSE EN CONSOLA SEGUIRA SIENDO BOOLEAN
var bandera = true;
console.log(typeof bandera);

// TIPO DE DATO FUNCION 
function miFuncion(){

}
console.log(typeof miFuncion);

//TIPO CLASE ES UNA FUNCTION

class persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
    this.apellido = apellido;
    }
}
console.log(typeof persona);

//TIPO DE DATO UNDEFINED
//Es indefinida ya que no se le asigna ningun valor
var x;
console.log(typeof x);

//TIPO DE DATO UNDEFINED
//Se declara la variable como indefinida por lo cual lo detecta como undefined
x = undefined;
console.log(typeof x);

// Si declaramos y con la palabra null, los null son tomados como objetos


var y = null;
console.log(typeof y);