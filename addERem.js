// Adicionar e remover 

const alunos = ['Anna', 'Sarah', 'Marte']; 
console.log(alunos);
console.log("Primeiro aluno: " + alunos[0]);

//adicionar 
alunos.push('Ingrid', 'Marco');
console.log(alunos);

//adicionar diretamente a posição
alunos[5] = 'Luziane';
console.log(alunos);

//remover o item mais próximo
alunos.pop();
console.log(alunos);