console.log('agregar un elemento a mi objeto creado');
// Variable Globales
let saludos = {
    saludo : 'hola',
    despedida : 'adios',

}

const aregarNuevoValor = (variableobj,indice,valor) => {
    // variable locales
    if (!variableobj.hasOwnProperty(indice)){
        variableobj[indice] = valor;
        console.log(variableobj);
    }else {
        console.log('ya existe');
    }
    
}

aregarNuevoValor(saludos,'noches',3233);
console.log(saludos);
