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


/**
 * TRASVERSING----------------------------------------------------------------------
 * Vamos a obtener los hijos de su padre, a seleccionar elementos como en CSS
 * pero mejorado
 */
const navegacion = document.querySelector('#principal');

console.log(navegacion.children);

//cambiando el texto al primer enlace
console.log(navegacion.children[0].textContent = 'Nuevo Enlace');

const barra = document.querySelector(".barra");
console.log(barra.children[0].children[0].children);

//seleccionando todos los cursos
const cursos = document.querySelectorAll(".card");
console.log(cursos);
//podemos contar cuantos elementos hay

//--------------TREVERSING DEL PADRE HACIA EL HIJO
console.log(enlaces[0].parentElement.parentElement.parentElement);
console.log(enlaces[4].previousElementSibling.previousElementSibling);

