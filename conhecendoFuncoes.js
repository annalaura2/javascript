// Introdução a Funções no javascript
function teste(){
    console.log('teste');
}

teste();

function sayMyName(name){
    console.log("Your name is " + name);
}

sayMyName('Anna Laura');

function adicao(numero1, numero2){
    const resultado = numero1 + numero2
    console.log("Resultado = " + resultado);
}

adicao(4,5);

function quadrado(valor){
    return valor*valor; // retornando um valor
}

const quadradoDeDez = quadrado(10);
console.log('Quadrado = ' + quadradoDeDez);