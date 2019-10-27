// pessoa aponta para um endereço de memoria que aponta para o objeto em si
const pessoa = {nome: 'Joao'}
//Isso nao gera um problema pois o que foi alterado foi o objeto
pessoa.nome ='Pedro'
console.log(pessoa)

//Gera um erro pois nesse caso esta tentante criar uma nova referencia na memoria para pessoa
//Porem ja existe , logo gera um erro
//pessoa = {nome: 'Ana'}

//Congela o objeto pessoa
Object.freeze(pessoa)
//Nada disso sera feito pois o objeto ja foi congelado
pessoa.nome='Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)
