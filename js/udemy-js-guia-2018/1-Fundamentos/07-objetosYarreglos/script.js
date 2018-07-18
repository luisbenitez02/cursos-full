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
     
/**
 * Funcion para imprimir
 */
function print(name,data){
     console.log(name+' :',data);
}









