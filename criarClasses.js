// Criando classes e instâncias

class Pessoa{
    nome; 
    idade; 

    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); 
    }
}

//como instanciar 

const anna = new Pessoa();
anna.nome = 'Anna Laura'; 
anna.idade = 19;

const sarah = new Pessoa(); 
sarah.nome = 'Sarah'; 
sarah.idade = 20; 

anna.descrever(); 
sarah.descrever();
