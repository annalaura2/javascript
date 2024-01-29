class Carro {
    marca; 
    cor; 
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca; 
        this.cor = cor; 
        this.gastoMedioPorKm = gastoMedioPorKm;
    }


    calcularGasto(distancia, precoC){
        return distancia*this.gastoMedioPorKm *precoC;
    
    }
}

const onix = new Carro('chevrolet', 'vermelho', 1/12); 
console.log(onix);
console.log("Gasto em reais: " + onix.calcularGasto(70,5));



