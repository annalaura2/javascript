const notas = [];

notas.push(5);
notas.push(10);
notas.push(8);

// notas.lengt = mostra o tamanho da lista

let soma = 0;

for (i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media.toFixed(2));
