//Invocando uma funcao dentro de outra

function escrevaMeuNome(nome, sobrenome){
    console.log("Meu nome é " + nome);
    escrevaMeuSobrenome(sobrenome);

}

function escrevaMeuSobrenome(sobrenome){
    console.log("Meu sobrenome é " + sobrenome);
}

(function(){

    const nome = 'ANNA'; 
    const sobrenome = 'CASTRO'; 
    escrevaMeuNome(nome, sobrenome); 


})(); 