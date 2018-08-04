// Eliminar de Local Storage
localStorage.clear();

//vamos a cambiar propuedades como si fuera CSS
let encabezadito = document.getElementById('encabezado');
encabezadito.style.background = '#333';
encabezadito.style.color = '#FFF';
encabezadito.style.padding = '20px';
encabezadito.textContent = 'Los Mejores Cursos';

//Query Selector
//const encabezado = document.querySelector('#encabezado');
//puedo aplicar estilos de la misma forma que con getElementById
console.log(encabezadito);

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

/**
 * 
 * ----------------------------------------CREANDO ELEMENTOS CON JS
 */

//creando enlace

const miEnlace = document.createElement('a');
//agregando clase
miEnlace.className = 'enlace';
miEnlace.id = 'nuevo-id';

miEnlace.setAttribute('href', '#');

miEnlace.textContent = 'Nuevo Enlace';

console.log(miEnlace);

//agregando al HTMl
document.querySelector('#secundaria').appendChild(miEnlace);

/**
 * Reemplazando elementos
 */
const nuevoEncabezado = document.createElement('h2');
nuevoEncabezado.id = 'encabezado';
nuevoEncabezado.appendChild(document.createTextNode('Los Mejores Cursos'));

const anterior = document.querySelector('#encabezado');

const elPadre = document.querySelector('#lista-cursos');

//Reemplazar
elPadre.replaceChild(nuevoEncabezado,anterior);

/**
 * AGREGANDO Y QUITANDO CLASES Y OTROS ATRIBUTOS--------------------------------
 */
const enlacesitos = document.querySelector('.enlace');
const navegacion_2 = document.querySelector('#principal');

//enlacesitos[0].remove();//elimino enlace
navegacion.removeChild(enlaces[0]);

//agregando y quitando elementos
const primerLi = document.querySelector('.enlace');
let elemento;
//obtener una clase de CSS
elemento = primerLi.className;
elemento = primerLi.classList.add('nueva-clase');
elemento = primerLi.classList.remove("nueva-clase");
elemento = primerLi.classList;

console.log(elemento);

//leer atributos
elemento = primerLi.getAttribute('href');
primerLi.setAttribute("href",'http://facebook.com');
elemento = primerLi;

primerLi.setAttribute('data-id',20);//atributos personalziados
primerLi.hasAttribute('data-id');//comprueba si existe el atributo
primerLi.removeAttribute('data-id');//eliminando atributo
console.log(elemento);

/**
 * Event Listeners |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
 */

 //cuando hagas click
 document.querySelector('#submit-buscador').addEventListener('click', mostrarMensaje);

 function mostrarMensaje(e) {
      e.preventDefault(); //previene comportamiento predeterminado del form asociado a este click
      alert('Estamos buscando...');
      //obtener elemento del click
      miClick = e;
      miClick = e.target;
      miClick = e.target.id;

      console.log(miClick);
      
 }

document.querySelector('#encabezado').addEventListener('click', cambiarTexto);

function cambiarTexto(e) {
     e.target.innerText = "Nuevo Encabezado :D";
}

const encabezado = document.querySelector


/**
 * ----- EVENTOS PARA EL MOUSE |||||||||||||||||||||||
 */
const botoncito = document.querySelector('#vaciar-carrito');
const cabecita = document.querySelector("#encabezado");

//----------- Click
//botoncito.addEventListener('click', obtenerEvento);
//------------ Doble click
//botoncito.addEventListener('dbclick', obtenerEvento);
//----------- Mouse Enter
//botoncito.addEventListener('mouseenter', obtenerEvento);
//----------- Mouse Leave
//botoncito.addEventListener('mouseleave', obtenerEvento);
//----------- Mouse Over
//botoncito.addEventListener('mouseover', obtenerEvento);
//----------- Mouse Out
//botoncito.addEventListener('mouseout', obtenerEvento);
//----------- Mouse Down
//botoncito.addEventListener('mousedown', obtenerEvento);
//----------- Mouse Up
//botoncito.addEventListener('mouseup', obtenerEvento);

cabecita.addEventListener('mousemove',obtenerEvento);

function obtenerEvento(e) {
     console.log(`EVENTO: ${e.type}`); 
}

/**
 * Que es el event Bubbling
 * 
 * Sucede cuando tienes un elemento dentro de otros,
 * no importa si eliges el mas pequeño, siempre sacara
 * tambien a los padres.
 * Si eliges el grande el padre y das click sobre el solo 
 * saldra el
 * 
 * NO ES EN SI UN EVENTO es un pequño bug o forma de trabajar de Javascript
 */

const card = document.querySelector('.card');
const infoCurso = document.querySelector('.info-card');
const agregarCarrito = document.querySelector('.agregar-carrito');

card.addEventListener('click', function (e) {
     console.log('Click en card');

});

infoCurso.addEventListener('click', function (e) {
     console.log('Click en info curso');
});

agregarCarrito.addEventListener('click', function (e) {
     console.log('Click en agregar Carrito');

});

/**
 * Delegation
 * es una solucion al bubbling
 */
/**
 * Vamos a poder borrar elementos sin afectar los padres, solo eliminamos los hijos
 */

document.body.addEventListener('click', eliminarProducto);

function eliminarProducto(e) {
     e.preventDefault();

     if (e.target.classList.contains('borrar-curso')) {
          console.log(e.target.parentElement.parentElement.remove());
     }

     if (e.target.classList.contains('agregar-curso')) {
          console.log('Curso Agregado');
     }
}