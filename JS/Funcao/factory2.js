function criarProduto(nome, produto){
    return {
        nome,
        produto,
        desconto: 0.1
    }
}

console.log(criarProduto('Carro', 1000))
console.log(criarProduto('Moto', 200))
