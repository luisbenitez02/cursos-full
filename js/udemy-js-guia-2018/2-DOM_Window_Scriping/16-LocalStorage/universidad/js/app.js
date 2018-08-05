// Eliminar de Local Storage

localStorage.clear();
/**
 * Session Storage = Borra todo al cerrar la ventana
 * LocalStorage = Lo almacena de forma persistente
 */
localStorage.setItem('nombre','Luis');
localStorage.setItem('edad', '23');
sessionStorage.setItem('ingreso','true');

//para borrar items
localStorage.removeItem('edad');

//podemos recuperarlo

let nombre = localStorage.getItem('nombre');
console.log(nombre);


