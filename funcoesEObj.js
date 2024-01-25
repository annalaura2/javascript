// Funções recebendo objetos
class Pessoa{
    nome; 
    idade; 
    anoDeNascimento;

    constructor (nome, idade){
        this.nome = nome; 
        this.idade = idade;
        this.anoDeNascimento = 2024 - idade;
    }

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); 
    }
}

const anna = new Pessoa('Anna Laura', 19); 
const sarah = new Pessoa('Sarah', 20);

function comparar(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`A ${p1.nome} é mais velha que a ${p2.nome}`);
    }else{
        if(p2.idade > p1.idade){
            console.log(`A ${p2.nome} é mais velha que a ${p1.nome}`);
        }else{
            console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
        }
    }
}


comparar(anna, sarah);