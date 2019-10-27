//Formas de se criar um objeto

//Usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
const obj2 =  new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc){
    this.nome= nome
    this.getPrecoComDesconto = () => {
        return preco * (1-desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.14)
const p2 = new Produto('PC', 2987.57, 0.57)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(p1)
p1.preco=245847
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())
console.log(p1)

//Função Factory: Cria um objeto a partir de uma função
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30- faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 1000, 5)
const f2 = criarFuncionario('Maria', 5000, 0)

console.log(f1.getSalario(), f2.getSalario())

//Object.create
//Outra forma de criar um objeto
const filha = Object.create(null)
filha.nome ='Ana'
console.log(filha)