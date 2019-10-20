const valores= [7.7,9,70, 8.8]
console.log(valores[0], valores[1])
valores[4]=10

console.log(valores[4])
console.log(valores)
console.log(valores.length) //Mostra o tamanho do array

valores.push({id: 3}, false, null, 'teste') //push adiciona elementos ao array
console.log(valores) //array em js é heterogenio

console.log(valores.pop()) //.pop retira o ultimo elemneto da lista
delete valores[0] // elimina o elemento
console.log(valores)

console.log(typeof valores) // array é do tipo objeto



