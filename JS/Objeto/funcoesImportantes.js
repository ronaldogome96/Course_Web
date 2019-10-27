
const pessoa = {
    nome: 'Rebeca',
    idade: 2, 
    peso: 13
}

//Mostra os atributos do objeto
console.log(Object.keys(pessoa))
//Mostra os valores do objeto
console.log(Object.values(pessoa))
//Faz um array com os atributos e objetos
console.log(Object.entries(pessoa))
//Age como um FOR dentro do array
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})
//Define propiedades do objeto
Object.defineProperty(pessoa, 'DataNascimento', {
    enumerable: true,
    writable: false,
    value:'01/01/2019'
})

console.log(pessoa)
console.log(Object.keys(pessoa))


//Forma de adicionar, concatenar objetos
const dest = { a:1 }
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)
console.log(obj)
console.log(dest)
