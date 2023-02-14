
//A validação de idade ta pegando a data inserida pelo usuario e somando 18 anos
//apos isso ets verificando se a data atual é amior ou menos a idadde + 18
// retornando true para maiores e false para menores.
export default function ehMaiorDeIdade (campo){
    const dataNascimento = new Date(campo.value);
   if(!validaIdade(dataNascimento)){
    campo.setCustomValidity('O usuario não é maior de idade');
   }
}

function validaIdade(data){
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() +18, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais18;
}