let arreglo=[1,2,3,4,5,6,7,8,9,10];

arreglo.forEach((elemento)=>{
    if (elemento % 2 === 0) {
        console.log('el numero ' + elemento +  ' el numero es par ');      
    }
    else {
        console.log('el numero ' + elemento +  ' el numero es impar ');
    }
})
