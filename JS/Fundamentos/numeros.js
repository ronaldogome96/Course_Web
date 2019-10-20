
const peso1 =1.0
const peso2= Number('2.0') // Outra forma de declarar um numero
console.log(peso1, peso2)
console.log(Number.isInteger(peso1)) //Retorna true ou false para se o numero é inteiro ou nao
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 8.445
const total = avaliacao1*peso1 + avaliacao2*peso2
const media = total / (peso1+peso2)
console.log(media.toFixed(2)) //.toFixed(2) limita o numero de casas decimais e nao transforma a variavel
console.log(media.toString()) // Mostra em string
console.log(media.toString(2)) // Mostra em binaria
console.log(media.toString(16)) // Mostra em hexadecimal
console.log(media)
console.log(typeof media)
