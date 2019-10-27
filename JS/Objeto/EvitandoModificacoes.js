
// Object.preventExtensions
// Nao permite que seja adicionados atributos ao objeto
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promocao'
})

produto.nome = 'Borracha' // Pode mudar
produto.descricao = 'Nova borracha' // Nao altera
delete produto.tag //Pode deletar
console.log(produto)

//Object.seal
//Nao pode adicionar nem excluir mais pode modificar
const pessoa = { nome:'Juliana', idade: 35}
Object.seal(pessoa)
