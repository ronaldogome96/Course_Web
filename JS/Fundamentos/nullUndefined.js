
let valor
console.log(valor) //undefined

valor = null
console.log(valor) //null

//console.log(valor.toString()) //erro

const produto={}
console.log(produto.preco) //undefined
console.log(produto) //Objeto vazio

console.preco = 3.58
console.log(produto) //objeto

produto.preco = undefined 
console.log(!!produto.preco) //undefined
//delete produto.preco
console.log(produto) 

produto.preco= null
console.log(!!produto.preco) //false
console.log(produto) //objeto


