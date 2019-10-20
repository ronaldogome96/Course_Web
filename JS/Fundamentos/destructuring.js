const pessoa = {
    nome:'Julia',
    idade:7,
    endereco:{
        logradouro: 'Rua ABC',
        numero: 100
    }
}

const {nome, idade} = pessoa // Tira para o programa global as variavies nome, idade
console.log(nome,idade)
const {nome:n , idade:i} = pessoa //Redefine o nome das variaveis
console.log(n,i)

const {endereco:{logradouro, numero}} = pessoa
console.log(logradouro, numero)