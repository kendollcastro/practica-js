//Ejercicio 6

let numero = parseInt(prompt('Digite el numero;'));
let i = 2;
let primo = true;

while( i < numero){
    if(numero % i == 0){
        primo = false;
    } i++
}
if(primo == true){
    console.log('El numero es primo', numero)
}else{
    console.log('El numero no es compuesto', numero)
}