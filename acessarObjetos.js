// Acessando dinamicamente os valores do objeto
const pessoa = {
    nome: 'Anna Laura',
    idade: 19,
    
    descrever: function (){
    console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`); //crase
    }
};

const atributo = 'idade';
console.log(pessoa[atributo]); // pedindo o valor que está salvo como atributo

pessoa ['nome'] = 'Anna Laura';
console.log(pessoa['nome']);