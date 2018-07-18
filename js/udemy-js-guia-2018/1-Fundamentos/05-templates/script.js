const     producto1 ='Chicha Morada',
          precio1 = 3,
          producto2= 'Naranjas',
          precio2 = 5;


/**
 * Esta es la forma vieja
 */
/*html = '<ul>' +
          '<li>Orden: ' + producto1 + '</li>' +
          '<li>Precio: ' + precio1 + '</li>' +
          '<li> Orden: ' + producto2 + '</li>' +
          '<li>Precio: ' + precio2 + '</li>' +
     '</ul>';

console.log(html);*/

let htmlito = `
     <ul>
          <li>Orden: ${producto1} </li>
          <li>Precio: ${precio1} </li>
          <li>Orden: ${producto2} </li>
          <li>Precio: ${precio2} </li>
     </ul>`;

document.getElementById('app').innerHTML = htmlito;



