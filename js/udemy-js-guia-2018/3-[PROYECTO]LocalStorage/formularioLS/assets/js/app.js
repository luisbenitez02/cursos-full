/** ---------VARIABLES------- */
const listaTareas = document.getElementById('lista-tareas');

/** ---------EVENT LISTENERS------- */
eventListeners();

function eventListeners() {
     //cuando se envia el formulario: agrego evento y ejecuto funcion
     document.querySelector('#formulario').addEventListener('submit', agregarTarea);
}

/** ---------FUNCIONES------- */

//----- Agregar cosa del formulario
function agregarTarea(e) {
     e.preventDefault();
     console.log('formulario enviado');//DEBUG
     
     //leer valor del textArea
     const tarea = document.getElementById('tarea').value;

     //crear boton de eliminar
     const botonDelete = document.createElement('a');
     botonDelete.classList = 'borrar-tweet';
     botonDelete.innerText = 'X';

     //crear elemento y añadirlo a la lista
     const li = document.createElement('li');//ya es un elemento HTML
     li.innerText = tarea;//agrego el texto de tarea
     //agrego el botoncito de borrar
     li.appendChild(botonDelete);
     //ahora tomo el padre donde va a ir mi elemento li
     listaTareas.appendChild(li);
     
}