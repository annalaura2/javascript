/**Programa para calcular o valor de uma viagem: 
 * VARIÁVEIS: 
 * 1. Preço do combustível 
 * 2. Gasto médio do combustível por KM
 * 3. Distância em KM da viagem; 
 */

const precoC = 5.79; 
const gastoMedio = 12; 
const distancia = 1580; 

const litrosC = distancia / gastoMedio; 
const valorT = litrosC*precoC;
console.log("Valor total da viagem: " + valorT.toFixed(2));
//arrendondando a variável - transformar em texto

