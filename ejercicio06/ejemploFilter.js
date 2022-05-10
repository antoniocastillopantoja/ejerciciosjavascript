<<<<<<< HEAD
console.log('ejemplo filter');
let arreglo=[50,80,72,60,96];
console.log(arreglo);
let arregloDos = arreglo.filter(
    function(value){
        return value>50;
    }
);

console.log('el otro arreglo dos');
=======
console.log('Ejemplo Filter');
let arreglo=[50,80,40,60,96];
console.log(arreglo);
let arregloDos = arreglo.filter(
    function(value, index){
        //and && or || 
        return (value > 50 || index === 2);
    }
)
console.log('--->');
>>>>>>> 3aad8df44ff5b29a9dfafc3d8434197c54e6b3cd
console.log(arregloDos);