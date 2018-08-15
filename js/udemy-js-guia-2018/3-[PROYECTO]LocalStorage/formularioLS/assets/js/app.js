/** ---------VARIABLES------- */
const listaTareas = document.getElementById("lista-tareas");

/** ---------EVENT LISTENERS------- */
eventListeners();

function eventListeners() {
  //cuando se envia el formulario: agrego evento y ejecuto funcion
  document
    .querySelector("#formulario")
    .addEventListener("submit", agregarTarea);

  //borrar Tweets
  listaTareas.addEventListener("click", borrarTweet);
  //se dispara cuando el DOM este completamente cargado es parecido a un document.ready
  document.addEventListener("DOMContentLoaded", localStorageListo);
}

/** ---------FUNCIONES------- */

//----- Agregar cosa del formulario
function agregarTarea(e) {
  e.preventDefault();
  console.log("formulario enviado"); //DEBUG

  //leer valor del textArea
  const tarea = document.getElementById("tarea").value;

  //crear boton de eliminar
  const botonDelete = document.createElement("a");
  botonDelete.classList = "borrar-tweet";
  botonDelete.innerText = "X";

  //crear elemento y añadirlo a la lista
  const li = document.createElement("li"); //ya es un elemento HTML
  li.innerText = tarea; //agrego el texto de tarea
  //agrego el botoncito de borrar
  li.appendChild(botonDelete);
  //ahora tomo el padre donde va a ir mi elemento li
  listaTareas.appendChild(li);

  //------------- Anadir a localStorage
  agregarTareaLocalStorage(tarea);
}
/**
 * Elimina Tweet del DOM
 */
function borrarTweet(e) {
  e.preventDefault();
  //console.log("Diste click en al lista");

  if (e.target.className === "borrar-tweet") {
    e.target.parentElement.remove(); //eliminar elemento
    //Llamada a funcion: le pasamos el texto que deseamos buscar en el JSOn para luego borrarlo
    borrarTareaLocalStorage(e.target.parentElement.innerText);
    
  } else {
    //console.log("Diste click en otro  lugar");
  }
}

/**
 * Agregar tarea a LocalStorge
 */
function agregarTareaLocalStorage(tarea) {
  let tareas;

  tareas = obtenerTareasLocalStorage();

  //Anadir nueva tarea
  tareas.push(tarea); //lo que venga lo agregamos al arreglo (vacio o lleno)

  //convertir de string a arreglo para local Storage
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

/**
 * Vamos a rescatar todas las tareas en localStorage
 */
function obtenerTareasLocalStorage() {
  let tareas;
  //Revisamos los valores del localStorage
  if (localStorage.getItem("tareas") === null) {
    tareas = []; //si no hay nada es un arreglo vacio
  } else {
    tareas = JSON.parse(localStorage.getItem("tareas"));
  }
  return tareas;
}

/**
 * Mostrar datos del LocalStorage en la lista
 * Esta funcion carga los datos que tengamos previamente almacenados llamando a obtenerTareasLocalStorage()
 * y los agrega al DOM
 */

function localStorageListo() {
  let tareas;

  tareas = obtenerTareasLocalStorage();
  console.log("Datos: ", tareas); //DEBUg

  tareas.forEach(function(tarea) {
    //crear boton de eliminar
    const botonDelete = document.createElement("a");
    botonDelete.classList = "borrar-tweet";
    botonDelete.innerText = "X";

    //crear elemento y añadirlo a la lista
    const li = document.createElement("li"); //ya es un elemento HTML
    li.innerText = tarea; //agrego el texto de tarea
    //agrego el botoncito de borrar
    li.appendChild(botonDelete);
    //ahora tomo el padre donde va a ir mi elemento li
    listaTareas.appendChild(li);
  });
}

/**
 * Eliminar Tareas de LocalStorage
 */
function borrarTareaLocalStorage(tarea) {
    let tareas, tareaBorrar;
    //elimina la x de la tarea
    tareaBorrar = tarea.substring(0, tarea.length -1);//corta todo menos la ultima letra
    
    tareas = obtenerTareasLocalStorage();

    tareas.forEach(function name(tarea, index) {
        //Buscamos el texto y lo eliminamos
        if (tareaBorrar === tarea) {
            tareas.splice(index,1);//despues de index, cuanto eliminas?     
        }
    });
    localStorage.setItem('tareas', JSON.stringify(tareas));
}
