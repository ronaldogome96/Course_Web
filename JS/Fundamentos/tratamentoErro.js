function tratarErrror (erro){
    throw 'Erro de processamento' // throw é a mensagem
}


function imprimirNome(obj){
    try{
        console.log(obj,name.toUpperCase()+ '!!!!')
    } catch(e) {
        tratarErrror(e)
    } finally {
        console.log('fINAL') // é executado sempre,independente do erro ou nao
    }
}
const obj = { nome: 'Ronaldo'} // da erro pois na função é name e aqui é nome
imprimirNome(obj)