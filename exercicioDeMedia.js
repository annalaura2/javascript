// Média de notas - EXERCÍCIO

const n1 = 5; 
const n2 = 5; 
const n3 = 6; 
const media = (n1 + n2 + n3)/3;

if(media >= 7){
    console.log("Passou! Nota: " + media);
}else{
    if(media < 5){
        console.log("Reprovou! Nota: " + media.toFixed(2));
    }else{
        console.log("Exame Final! Nota: " + media);
    }
}