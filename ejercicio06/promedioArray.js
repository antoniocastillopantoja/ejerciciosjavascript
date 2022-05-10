console.log('ejemplo para sacar el promedio');
let arreglo = [50,80,72,60,96];

let promedio = 0;
for (let indice=0; indice < arreglo.length; indice++) {
    promedio = promedio + arreglo[indice];
}
let lenarreglo =arreglo.length;
console.log('len'+lenarreglo, promedio);
promedio = (promedio/lenarreglo);
console.log('el promedio obtenido es ->'+promedio);

//hacerla tamnbien con la funcion foreach y hacerla tambien como funcion
let calificaciones = [50,80,72,60,96];
const result = function(califaciones){
    let promedio = 0;
    califaciones.forEach(
        function(value){
            promedio = promedio + value;
        }
    );
    promedio = promedio / calificaciones.length;
    if (promedio >= 70) {
        console.log('Aprobado '+promedio);

    }else {
        console.log('Reprobado '+promedio);
    }
}

