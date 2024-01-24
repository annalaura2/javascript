
// Cálculo IMC

function calcularImc(peso, altura) {

    return peso / (altura * altura);

}

function classificarIMC(imc) {
    if (imc < 18.5) {
        console.log("Abaixo do peso. IMC = " + imc.toFixed(2));
    } else {
        if (imc > 18.5 && imc < 25) {
            console.log("Peso normal. IMC = " + imc.toFixed(2));
        } else {
            if (imc >= 25 && imc < 30) {
                console.log("Acima do peso. IMC = " + imc.toFixed9(2));
            } else {
                if (imc >= 30 && imc < 40) {
                    console.log("Obeso. IMC = " + imc.toFixed(2));
                } else {
                    console.log("Obeso Grave. IMC = " + imc.toFixed(2));
                }
            }
        }
    }
}

function main() { // função principal - o programa será rodado aqui e essa função será chamada

    const peso = 60;
    const altura = 1.56;
    const imc = calcularImc(peso, altura);
    classificarIMC(imc);
}

main();