/*
Hay dos formas de agregar variables

var y let
*/

/* Varaibles Globales con var */
var name = "Viviana";
var name = "Luis";

var vacia;//varaibles vacias
console.log(name);
console.log(vacia);

var uno = 1, dos=2;//declaradas juntas
console.log(uno + dos);

/**
 * Variables con let: locales
 */
let mascota ="paquita";
console.log(mascota);

//No puedes renombrar una variable con let
//saldra error
let producto="Jitomate";
//let producto="Berenjena";//genera error
//puedes modificar pero no redeclarar

/**
 * Variables con const
 */
const fijo = 28;
//fijo=15;//NO permite redeclarar y siempre se deben declarar al principio
console.log("Hola" + fijo);
