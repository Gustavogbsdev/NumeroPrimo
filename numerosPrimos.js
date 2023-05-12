const prompt = require("prompt-sync")({ sigint: true});

let entrada = prompt("Digite um número: ");
let isPrimo = true;


for(let contador = 2; contador < entrada; contador++){
    console.log(`${entrada} dividido por ${contador} tem resto de divisão: ${entrada % contador}`);
    if(entrada % contador === 0){
        isPrimo = false;
    break;
    }
    
}
if(isPrimo){
    console.log("O numero digitado é primo.");
} else {
    console.log("O número digitado não é primo.");
}