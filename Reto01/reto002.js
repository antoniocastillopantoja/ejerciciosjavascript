 let aprobadas=[50, 80, 100, 69, 70, 10]; // [80, 100, 70]

let otrasaprobadas=[90, 90, 50, 45, 100, 80]; // [90, 90, 100, 80]

 const resultados = aprobadas.filter((notas)=>{
    if (notas > 50) {
        return true
    }
});

console.log(resultados);

const resultados2 = otrasaprobadas.filter((notas)=>{
    if (notas > 50) {
        return true
    }
});

console.log(resultados2);