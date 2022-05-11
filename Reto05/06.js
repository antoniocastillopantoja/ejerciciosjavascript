// Crear un método que imprima en consola los números del 1 al 100 tomando en cuenta
// lo siguiente:
// ● Si el número es múltiplo de 3, imprimirá ‘Fizz’.
// ● Si el número es múltiplo de 5, imprimirá ‘Buzz’.
// ● Si el número es múltiplo de 3 y de 5, imprimirá ‘FizzBuzz’.
// ● Si el número no es múltiplo de 3 ni de 5, imprimirá el número.
// fizzbuzz();
//

let  inicioDeCiclo=1;
let finDeCiclo =10;

for (let i = inicioDeCiclo; i <= finDeCiclo; i++) {
    console.log(i);    
    if ((i % 3) === 0) {console.log('Fizz');}
    if ((i % 5) === 0) {console.log('Buzz');}
    if (i % 3 ===0) && (i % 5===0) {console.log('FizzBuzz');
    } else {console.log(`este numero no es multiplo de 3 y 5 ${i}`);}
}

  
    
