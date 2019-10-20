let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1 
console.log(!!isAtivo) // A negação dupla volta para o valor booleano original

console.log('Os verdadeiros.....') // Tudo que da certo é true
console.log(!!3)
console.log(!!-4)
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos......')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!(isAtivo=false))
console.log(!!undefined)

console.log('Pra finalizar')
console.log(!!(''|| null || 0 || "OK"))

let nome='Joao'
console.log(nome||'Ronaldo') //Operador logico ou
