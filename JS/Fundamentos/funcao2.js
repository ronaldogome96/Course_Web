// Armazenando uma função em uma variavel
const imprimirSoma = function(a,b){
    console.log(a+b)
}

imprimirSoma(2,3)

//Armazenando uma função arrow em uma variavel
const soma = (a,b) => {
    return a+b
}
console.log(soma(2,3))

//retorno implicito
const subt = (a,b) => a-b // SO pode executar um procedimento
console.log(subt(2,3))

