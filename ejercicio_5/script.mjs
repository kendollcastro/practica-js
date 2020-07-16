//Ejercicio 5

let numero = parseInt(prompt('Ingrese un numero:'));
let numeroSecreto = 10;
let numeroSalida = 0;

if(numero == numeroSecreto){
    console.log('Ese es el numero ganador', numero);
}else{
    
    while(numero != numeroSalida && numero != numeroSecreto){
    numero = parseInt(prompt('Ingrese otro numero:'));
        if(numero <= 100 && numero >= 1){
            if(numero < numeroSecreto){
                console.log('El numero indicado es menor al numero secreto', numero);
            }else if(numero > numeroSecreto){
                console.log('El numero indicado en mayor al numero secreto',numero);
            }else if(numero == numeroSecreto){
                console.log('Este es el numero ganador', numero);
            }
        }
    }   
}