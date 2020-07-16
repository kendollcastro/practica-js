//Ejercicio 4

let textoUsuario = prompt('Escriba un texto').toLowerCase();
let caracterUsuario = prompt('Escriba un caracter;').toLowerCase();
let resultado = [];

for (let i = 0; i < textoUsuario.length; i++){
    if(textoUsuario[i] === caracterUsuario){
        resultado.push(i);
    }
}
console.log(`El caracter ${caracterUsuario} es repetido en el ${resultado.length}`);
