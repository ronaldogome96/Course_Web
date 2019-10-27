//concat concatena arrays

const filhos = ['Jose', 'Joel']
const filhas = ['Maria', 'Jessica']
const todos = filhas.concat(filhos)
//Nao muda os arrays passados como parametros
console.log(filhos, filhas, todos)

console.log([].concat([1,2], [3,4],5,[[6,7]]))