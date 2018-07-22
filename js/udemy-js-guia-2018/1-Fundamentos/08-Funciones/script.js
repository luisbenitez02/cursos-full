//Funciones con valores predeterminados
function saludar(nombre='Visitante') {
    return `Hola ${nombre}`;
}
print(saludar());
print(saludar('Luis'));

//function expresion
const suma = function(a,b) {
    return a+b;
}

print(suma(5,10));

//funcion IIEF
(function(lenguaje) {
    console.log(`Hola ${lenguaje}`);
    
})('Javascript');

const reproductor ={
    reproducir: function(name) {
        console.log(`Reproduciendo ${name}`);
        
    },

    pausar : function(name) {
        console.log("Pausado");
        
    }
}

reproductor.reproducir('Calocha');
reproductor.pausar();

//agregando
reproductor.borrar = function (id) {
    console.log(`Borrada: ${id}`);
    
}

reproductor.borrar(5);

//---------------------------------------------
/**
 * Funcion para imprimir
 */
function print(data){
     console.log(data);
}










