const edad = 18;
const precio = 45;//35 / 45 /60
const regateo = 5;
if (edad>=18 && edad<60) {
     console.log("Bienvenido");
     
} else if (edad>60) {
     console.log("Cuidado con los infartos");
     
} else{
     console.log("Vete a jugar League Of Legends");   
}

//if anidado
if (precio<=35) {
     console.log("Lo compro!");   
}else if (precio>35 && precio < 50) {
     console.log("Hagamele descuento vecino");
     if (regateo >= 10) {
          console.log("Vendamelo");
     } else{
          console.log("Hagale, mire que no tengo para el bus"); 
     }
} else {
     console.log("Gracias, estoy mirando");
}
/* Swtitch */
mi_switch('efectivo');
mi_switch("tarjeta");
mi_switch("cheque");
mi_switch("ninguno");

function mi_switch(metodoPago) {
     //estructura de control switch
     switch (metodoPago) {
          case 'efectivo':
               console.log('Se ha pagado con efectivo');
               break;
          case 'tarjeta':
               console.log('Pago con tarjeta');
               console.log('Procesando...');
               console.log('Espedando confirmacion de pago');
               console.log('Pago exitoso');
               break;

          case 'cheque':
               console.log('No papu esos cheques siempre rebotan');
               break;
               
          default: 'ninguno'
               console.log('Compra cancelada');
               break;
     }
}




