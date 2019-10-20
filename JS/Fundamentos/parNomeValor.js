// par nome/valor
const saudacao = 'Opa' //contexto lexico 1
function exec(){
    const saudacao = 'Falaaaa' //contexto lexico 2
    return saudacao
}
console.log(saudacao) //Executa a variavel global
console.log(exec()) //Executa a variavel local

const Cliente = {
    nome: 'Ronaldo',
    idade: 32,
    peso: 100,
    endereco: {
        logradouro: 'Rua da alegria',
        numero: 4
    }
}
console.log(Cliente) // Printa toda o objeto

