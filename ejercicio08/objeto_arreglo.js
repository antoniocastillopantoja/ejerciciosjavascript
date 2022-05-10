console.log('Difrencia de Arreglos y objetos');
//Arreglo[]
let arreglo = [1,2,4,'5***'];
//objeto {}
let discoqueen = {
    nameDisc: 'queen',
    date: new Date('1985-02-20'),
    price: 99.9,
    tracks:['pista1queen','pista2queen','pista3queen']
}
let discocerati = {
    nameDisc: 'cerati',
    date: new Date('1975-02-20'),
    price: 95.9,
    tracks:['pista1cerati','pista2cerati','pista3cerati']
}
let discosalsa = {
    nameDisc: 'salsa',
    date: new Date('1995-02-20'),
    price: 96.9,
    tracks:['pista1sala','pista2salsa','pista3salsa']
}
let tiendaDiscos = [discoqueen, discocerati,discosalsa];
tiendaDiscos.forEach(
    function(disco){
        console.log(`el disco es ${disco.nameDisc} su precio es ${disco.price} u fue creado ${disco.date}`);
    }
);

console.log('Funcion flecha es igual que una function');
//Funcinoes Flecha () => {}
tiendaDiscos.forEach(
    (disco,index) => {
        console.log(`el numero de disco es ${index+1}, disco es ${disco.nameDisc} su precio es ${disco.price} y sus pistas son:`);
        disco.tracks.forEach(
            (pista) => {
                console.log(pista);
            }
        )
    }
);

//Destructuracion de Objetos que tengan mismo nombre del atributo
console.log('Destructuracon');
tiendaDiscos.forEach(
    (disco,index) => {
        let {nameDisc, price, tracks} = disco;
        console.log(`el numero de disco es ${index+1}, disco es ${nameDisc} su precio es ${price} y sus pistas son:`);
        tracks.forEach(
            (pista) => {
                console.log(pista);
            }
        )
    }
);
//crear una funcion que me cambie elvalor del nombre 
//del cualquier disco que yo quiera en mi arreglo
//cambiarNombre(posicionArreglo, nuevoNombreDisco)


console.log(tiendaDiscos);
console.log(tiendaDiscos[1].price);
console.log(arreglo[3]);
console.log()