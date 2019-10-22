function getPreco( imposto=0, moeda = 'RS') {
    return `${moeda} ${this.preco * (1- this.desc) * ( 1+ imposto)}`
}

const produto = {
    nome: 'Notebok',
    preco: 4512,
    desc: 0.15,
    getPreco
}
global.preco = 20
global.desc = 0.5
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49999 , desc: 0.21}

// call e aply sao formas de passar parametros
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

//aply espera parametros em array
