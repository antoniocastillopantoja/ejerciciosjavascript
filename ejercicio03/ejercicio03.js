<<<<<<< HEAD
console.log("ejemplo03");

//ejemplo Switch
let diaSemana=6;
switch(diaSemana){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("jueves");
        break;
    case 5:
        console.log("viernes");
        break;
    case 6:
    case 7:
        //() ? : ; es lo mismo que los if
        (diaSemana ===6) ?  console.log(" si es sabado"): console.log("si es domingo");
        if (diaSemana ==6){
            console.log("es sabado");
        } else{
            console.log("es domingo");
        }
      break;
    default:
    console.log("dia invalido");
    break;
}

//
=======
console.log('Hola desde el ejemplo 03');
// Ejemplo de switch
let diaSemana = 6;
switch (diaSemana) {
    //( diaSemana===1 )
    case 1:
        console.log('-----');
        console.log('Lunes');
        break;
    case 2:
        console.log('*******');
        console.log('Martes');
        break;
    case 3:
        console.log('///////');
        console.log('Miercoles');
        break;
    case 4:
        console.log('|||||||');
        console.log('Juevs');
        break;
    case 5:
        console.log('^^^^^^^');
        console.log('Viernes');
        break;
    case 6://Sabado
    case 7://Domingo
        // ? = if     
        // : = else
        (diaSemana === 6) ? console.log('Es sabado') : console.log('Es domingo') ;
        // if(diaSemana === 6){
        //     console.log('--------------');
        //     console.log('Es Sabado');
        //     console.log('--------------');
        // } else {
        //     console.log('--------------');
        //     console.log('Es domingo');
        //     console.log('--------------');
        // }
        console.log('día de descanso');
        break;
    default:
        console.log('Dia de la semana invalido');
        break;
}
>>>>>>> 3aad8df44ff5b29a9dfafc3d8434197c54e6b3cd
