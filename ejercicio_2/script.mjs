//Ejercicios

const numero = parseInt(prompt('Ingrese el valor'));
let contador = 1;
let suma = 0;


while (contador <= numero){
    suma = suma + contador;
    contador++;
} 

console.log('La suma como resultado es:', suma)