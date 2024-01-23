const precoDoP = 34; 
const pix = 1; 
const debito = 0; 
const parc2V = 0; 
const parc = 0; 
const valorT = 0;

if(pix === 1){
    
    console.log(precoDoP - (precoDoP*0.15));
}else{
    if(debito === 1){
        valorT = precoDoP - (precoDoP*0.1); 
        console.log("Valor Total: " + valorT);
    }else{
        if(parc2V == 1){
            console.log("Valor Total: " + precoDoP);        
        }else{
            valorT = (precoDoP*0.1) + precoDoP; 
            console.log("Valor Total: " + valorT);
        }
    }
}