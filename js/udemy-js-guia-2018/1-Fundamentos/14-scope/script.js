var a = 'Viviana';
let b = 'Perrito';
const c = 18;

//scope de la funcion
function theScope() {
    var a = 'VIVIANA';
    let b = 'Vakishu';
    const c = 30;

    console.log('--------En la Funcion------');
    console.log(a,b,c);
      
}

theScope();

if (true) {
    var a= "Luis Hernando";
    let b= 'Muñeca';
    const c = 102;
    console.log('--------Bloque----------');
    console.log(a, b, c);
    
}

console.log('------------Globales-----------');
console.log(a, b, c);