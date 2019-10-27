//Coleção dinamica de pares chave/valor

//Cria o objeto chamado produto
const produto = new Object

//Algumas formas de instanciar objetos
produto.nome = 'Cadeira'
produto['marca do produto']='Generica'
produto.preco = 220

//Deleta
delete produto.preco

//Mostrando esse objeto
console.log(produto)

//Mostrando que o objeto pode ter varios atributos e de varios tipos
const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123,
        }
    },
    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],
    calcularSeguro: function(){
        //...
    }
}

//Formas de acessar
carro.proprietario.endereco.numero = 1000
//carro['propietario']['endereco']['logradouro']['numero']=2000
//Nao deu certo no meu VS code

console.log(carro)

delete carro.proprietario.endereco
console.log(carro)
