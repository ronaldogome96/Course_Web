console.log(typeof Object) //Função
console.log(typeof new Object) // Printa objeto, pois é uma instanciação

const Cliente = function() {}
console.log(typeof Cliente) // Função
console.log(typeof new Cliente) //Objeto, pois é uma instanciação

class Produto {}
console.log(typeof Produto) //Função
console.log(typeof new Produto()) //Objeto

