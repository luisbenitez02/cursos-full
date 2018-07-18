const numeros = [1,2,3,4,5,6,7,8,9,0];

console.log(numeros);

//metodo alternativo de arreglos
const names = new Array('Luis','viviana','Marta','Sofia','Calocha');

console.log(names);
console.log(Array.isArray(names));

//funciones con arreglos
console.log(names.indexOf('Luis'));

names.push('Juanita');
console.log(names);

names.unshift('Electra');
console.log(names);

names.pop();//remueve ultimo elemento
console.log(names);

names.shift();//remueve el primero
console.log(names);

names.splice(2,2);//a partir de la posicion 2 quita 2 elementos
console.log(names);

names.reverse();//cambia orden

console.log(names.concat(numeros));

const frutas = ['fresa','naranja','manzana','platano'];

//ordenar un arreglo con letras
frutas.sort();
console.log(frutas);

const numeritos = [25,4,1,6,9,8,4,55,11,21,100,95];

numeritos.sort(function(x,y){
     return x-y;
});

console.log(numeritos);

//de menor a mayor solo invertimos la resta
numeritos.sort(function(x,y){
     return y-x;
});

console.log(numeritos);











