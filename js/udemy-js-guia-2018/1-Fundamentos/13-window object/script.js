//const nombre = prompt();
//console.log(`Bienvenido ${nombre}`);

/*if (confirm('¿eliminar?')) {
    console.log('Eliminado'); 
} else{
    console.log('No borramos nada');
    
}*/

let altura,
    ancho;

altura = window.outerHeight;
ancho = window.outerWidth;

console.log(altura);
console.log(ancho);

//tamaño total (cuenta el tamaño del navegador )
altura_2 = window.innerHeight;
ancho_2 = window.innerWidth;

console.log(altura_2);
console.log(ancho_2);

//ubicacion
console.log(window.location);