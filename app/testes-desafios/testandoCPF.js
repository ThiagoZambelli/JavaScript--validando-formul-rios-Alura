
const primeiroDigito = [];
const segundoDigito = [];
const cpfDeTeste = ['96922180070', '98914330052', '22271642043']

function gerandoPrimeiroDigito(cpf){
    let soma = 0;
    let multiplicador = 10;      

    for(let tamanho = 0; tamanho < 9; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }     

    soma = (soma * 10) % 11;     

    if(soma == 10 || soma == 1){
        soma = 0;
    }
    
    primeiroDigito.push(soma);  
}

cpfDeTeste.forEach(n => {
    gerandoPrimeiroDigito(n);
})

function gerandoSegundoDigito(cpf){
    let soma = 0;
    let multiplicador = 11;      

    for(let tamanho = 0; tamanho < 10; tamanho++){
        soma += cpf[tamanho] * multiplicador;
        multiplicador--;
    }     

    soma = (soma * 10) % 11;     

    if(soma == 10 || soma == 1){
        soma = 0;
    }
    
    segundoDigito.push(soma);  
}

cpfDeTeste.forEach(n => {
    gerandoPrimeiroDigito(n);
})

cpfDeTeste.forEach(n => {
    gerandoSegundoDigito(n);
})

console.log(primeiroDigito)
console.log(segundoDigito)
