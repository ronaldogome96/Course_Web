
//array é heterogenio

let aprovados = new Array('Bia', 'Ana', 'Carlos')
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Carlos']
console.log(aprovados[1])
console.log(aprovados[3]) //undefined

//Formas de adicionar elementos ao array
aprovados[3]= 'Paulo'
aprovados.push('Abila')

console.log(aprovados)

aprovados[9] = 'Rafael' //faz com os elementos no meio fiquem undefined

console.log(aprovados.length) //tamanho do array

console.log(aprovados)
aprovados.sort() //reordena a lista
console.log(aprovados)

delete aprovados[1] //deleta o elemento dessa posição

aprovados.splice(1,2) //Indice, quantidade de elemnetos que voce deseja excluir, adicionar
console.log(aprovados)
