// Criando construtores 

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

console.log(anna);


anna.descrever(); 
sarah.descrever();

