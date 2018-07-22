try {
    funcioncita();
} catch (error) {
    console.log(error);  
} finally{
    console.log('Le vale verga si esta vacia o no, se ejecuta el "finally"');
    
}


function obtenerClientes() {
    console.log('Descargando...');
    
    //tiempo de espera
    setTimeout(() => {
        console.log('¡Completo!');
        
    }, 3000);
}

obtenerClientes();

//---------------------------------------------
/**
 * Funcion para imprimir
 */
function print(data){
     console.log(data);
}










