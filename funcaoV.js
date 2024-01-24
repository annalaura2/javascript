// Verificaridade 
function verificarMaioridade(idade){
    if(idade >= 18){
        console.log("Maior de idade");
    }else{
        console.log("Menor de idade"); 
    }
}

(function(){

    const idade = 19; 
    verificarMaioridade(idade);

})();