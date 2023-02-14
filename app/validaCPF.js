//função ehUMCPF esta limpando tudo que não é numero do campo cpf e fazendo varias validações.
export default function ehUmCPF (campo){
    const cpf = campo.value.replace(/\.|-/g, "");
    if(validaNumerosRepitidos(cpf) || validPrimeiroDigito(cpf) ||validaSegundoDigito(cpf)){
        campo.setCustomValidity('Este CPF não é valido');
    }
   
}


function validaNumerosRepitidos(cpf){
    const numeroRepetido = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]
    return numeroRepetido.includes(cpf);
}

//A validação do primeiro digito funciona da seguinte forma: o primeiro disgito é 
//a soma de todos os 9 numeros do cpf sendo multiplicados em ordem decrescente do 10 ao 2
// dpois o resultado por 10 e pegando o modulo deste resultado sendo dividido por 11.
function validPrimeiroDigito(cpf){

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
    
    return soma != cpf[9];
    
}

function validaSegundoDigito(cpf){

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
    
    return soma != cpf[10];    
}