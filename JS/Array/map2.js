const carrinho = [
    '{"nome":"Borracha", "preco": 3.54}',
    '{"nome":"Caderno", "preco": 15.89}',
    '{"nome":"Lapis", "preco": 0.50}',
    '{"nome":"Caneta", "preco": 83.24}'
]

//Retornar um array apena com os precos
//Quebra o arquivo json em um objeto
const paraObjeto =  json => JSON.parse(json)
//Pega apenas o valor do preco
const apenasPreco = produto => produto.preco
const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)
console.log(paraObjeto)
console.log(apenasPreco)
