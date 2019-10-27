
const produtos = [
    {nomee: 'Notebook', preco: 2229, fragil: true},
    {nomee: 'Ipad', preco: 1200, fragil: true},
    {nomee: 'Iphone', preco: 5000, fragil: true},
    {nomee: 'TV', preco: 259, fragil: false},
]

console.log(produtos.filter(function(p){
    return p.preco>1500
}))

const caro = produto => produto.preco>=2500
const fragil = produto => produto.fragil==true

console.log(produtos.filter(caro).filter(fragil))
