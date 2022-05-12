/*Crear una variable global que sea un array y crear dos funciones:

El primero debe agregar al array la información de un libro en forma de objeto.

El segundo debe imprimir el arreglo de objetos.
De tal forma que se puedan mandar a llamar en la consola las funciones para agregar más información al arreglo o para imprimir todos los elementos del arreglo

let infoLibros =[]

agregarLibro(“El Quijote”, “Cervantes”);

imprimirLibros(); // [{nombre: “El Quijote”, autor: “Cervantes”}]

agregarLibro(“Odisea”, “Homero”);

imprimirLibros(); 

// [

   {nombre: “El Quijote”, autor: “Cervantes”},

   {nombre: “Odisea”, autor: “Homero”}

]
*/

let infLibros = [];

let BookOne = {
    nombre: 'el quijote',
    autor: 'Cervantes'
}

let BookTwo = {
    nombre: 'odisea',
    autor: 'homero'
}

const agregarLibros = (book) => {
    infLibros.push(book);
}
const imprimirLibros = () =>{
    console.log(infLibros);
}

imprimirLibros();
agregarLibros(BookOne);
imprimirLibros();
agregarLibros(BookTwo);


