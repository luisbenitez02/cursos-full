//creando objetos
const persona = {
     nombre: "Elbert",
     apellido: "Gomez Torba",
     edad: 23,
     profesion: 'Ingenierio de sistemas',
     email: 'elbertgomeztorba@gmail.com',
     musica: ['salsa','bachata','Merengue'],
     ubicacion: {
          pais:'Colombia',
          ciudad: 'Palmira'
     },
     hablar: function () {
         return "Hola papus" + this.apellido;   
     }
}

print('objeto',persona);
print('objeto.dato',persona.nombre);
//imprimiendo elemento dentro de otro objeto
print('objeto dentro de otro', persona.ubicacion.ciudad);
//ejecutando una funcion
print('Funcion dentro de objeto',persona.hablar());

print('Acceso a los mismos elementos', persona.hablar() );//desde el objeto
    
//Arreglo de objetos
const autos =[
    {modelo:'Spark GT', motor: 1.6},
    {modelo: 'M2', motor: 1.8},
    {modelo: 'i10', motor: 1.4 },
];

print('Funcion con objetos',autos);

for (let i = 0; i < autos.length; i++) {
    print('auto #'+i, autos[i].modelo);
    
}

/**
 * Funcion para imprimir
 */
function print(name,data){
     console.log(name+' :',data);
}









