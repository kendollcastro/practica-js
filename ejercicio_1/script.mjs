//Ejercicio 1

let año = prompt('Digite el año que desee:');

if(año % 4 == 0 &&  año % 100!= 0 || año % 100 == 0){
  console.log('Es un año bisiesto!');

}else{
  console.log('No es un año bisiesto!');
}