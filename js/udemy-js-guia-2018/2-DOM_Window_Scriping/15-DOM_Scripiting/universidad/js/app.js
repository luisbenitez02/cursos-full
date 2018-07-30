// Eliminar de Local Storage
localStorage.clear();

//vamos a cambiar propuedades como si fuera CSS
encabezado = document.getElementById('encabezado');
encabezado.style.background = '#333';
encabezado.style.color = '#FFF';
encabezado.style.padding = '20px';
encabezado.textContent = 'Los Mejores Cursos';

//Query Selector
//const encabezado = document.querySelector('#encabezado');
//puedo aplicar estilos de la misma forma que con getElementById
console.log(encabezado);

//Cuando hay varios Class del mismo nombre .querySelector
//solo elige el primero.
//tambien puedes seleccionar h1 o elementos HTML

const enlaces = document.getElementsByClassName('enlace');
console.log(enlaces);

const links = document.getElementsByTagName('a');
console.log(links);

links[18].style.color= 'red';

//querySelectorAll
const enlaces_2 = document.querySelectorAll('#principal .enlace');

console.log(enlaces_2);

const enlaces_3 = document.querySelectorAll("#principal a:nth-child(odd)");//selecciono hijos impares

//agregamos color

enlaces_3.forEach(function(impares){
     impares.style.backgroundColor = 'red';
     impares.style.color = 'white';
});
