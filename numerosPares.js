//Percorrer uma lista de números e imprimir somente os pares

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 

console.log("NÚMEROS PARES:");
for(i = 0; i < numeros.length; i++){
    if(numeros[i] % 2 == 0){
        console.log(numeros[i]);
    } 
}