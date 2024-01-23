/**Programa para calcular o valor de uma viagem: 
 * VARIÁVEIS: 
 * 1. Preço do combustível 
 * 2. Gasto médio do combustível por KM
 * 3. Distância em KM da viagem; 
 */

const precoC = 5.79; 
const gastoM = 1; 
const distancia = 100; 

const litrosC = 100/1; 
const valorT = litrosC*precoC;
console.log("Valor total da viagem: " + valorT);
