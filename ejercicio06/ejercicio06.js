<<<<<<< HEAD
console.log('arreglo segunda parte');
let arreglo=[50,80,72,60,96];
console.log('antes');
console.log(arreglo);
console.log('despues');
//elimina la posicion 2 del arreglo es decir la pisicion 3 por que se considera 0,1,2
arreglo.splice(2,1); 
console.log(arreglo);
//no elimina la posicion 2 inserta un nuevo valor del arreglo es decir la pisicion 3 por que se considera 0,1,2
arreglo.splice(2,0,99); 
console.log(arreglo);
//elimina la posicion 2 y inserta un nuevo valor del arreglo en la posicion 2 es decir la pisicion 3 por que se considera 0,1,2
arreglo.splice(2,1,100); 
=======
console.log("Arreglos segunda parte");
let arreglo=[50,80,72,60,96];
console.log('Antes--------------');
console.log(arreglo);
// Eliminar la posicion 2
//arreglo.splice(2,1);
// No eliminar y colocar un nuevo valor
// arreglo.splice(2,0,99);
// Si eliminar y colocar un nuevo valor
arreglo.splice(2,1,99);
console.log('Despues--------------');
>>>>>>> 3aad8df44ff5b29a9dfafc3d8434197c54e6b3cd
console.log(arreglo);