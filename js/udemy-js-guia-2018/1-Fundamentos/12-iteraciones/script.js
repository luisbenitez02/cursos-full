const productos = [
     'camisa',
     'Pantalon',
     'Zapatos',
     'Chaqueta'
];


for (let i = 0; i < 11; i++) {
     console.log("Cuenta " + i);
     
     if (i===5) {
          console.log('Vamos en la mitad');
         // break;
     }
}

for (let i = 0; i < productos.length; i++) {
     console.log("Producto: " + productos[i]);

}

//-------------------------- Ciclo while
let i = 0;

while (i<10) {
    if (i===5) {
        console.log('cinco');
        i++;
        continue;
    }
    console.log(i);
    i++;
}

const musica = ['Calocha','Estoy enferma','Otra'];
let j=0;
while (j < musica.length) {
    console.log(musica[j]);
    j++;
}

//ciclo do while

let m=100;
do {
    console.log(`Do While: ${m}`);
    m++;
} while (m < 10);

//--------------------ForEach
const pendientes = ['Jugar Halo', 'Aprender JS', 'Apuntar en informe', 'Revisar correo', 'Comprar Pan'];

pendientes.forEach((tarea) => {
    console.log(tarea);
});

//------------------Map
const carrito = [
    { id: 1, producto:'El Kamasutra'},
    { id: 2,  producto:'El principito'},
    { id: 3, producto:'Enciclopedia' },
    { id: 4, producto: 'Halo Historias' },
];

const nombreProducto = carrito.map((elemento)=>{
    return elemento.producto;
});

console.log(nombreProducto);

automovil={
    modelo: 'Spark',
    motor: '1.6L',
    asientos: '5',
    anio:'2018'
}

for (let auto in automovil) {
    console.log(`${auto} : ${automovil[auto]}`);
    
}
