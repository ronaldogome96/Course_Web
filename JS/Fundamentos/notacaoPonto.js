console.log(Math.ceil(6,1))
//O ponto é usado para acessar atributos internos
const obj1 = {}
obj1.nome= 'Bola'
console.log(obj1.nome) //Printa o nome bola por meio do ponto

function obj(nome){
    this.nome = nome //usa o this para usar o parametro
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
