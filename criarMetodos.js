// Criando métodos para objetos
const pessoa = {
    nome: 'Anna Laura',
    idade: 19,
    
    descrever: function (){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); //crase
    }
};

pessoa.descrever();
