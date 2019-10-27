// Cadeia de prototipos (prototype chain)
Object.prototype.atrr0= 'Z'
const avo = { attr:'A'}
//Forma de herdar os atributos de avo
const pai = {__proto__: avo, atrr2:'B'}
const filho = {__proto__: pai, atrr3: 'C'}

//Ele acha o atributo pois é herdado em sequencia
console.log(filho.atrr0, filho.attr, filho.atrr2, filho.atrr3)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMax
        }
    },
    status(){
        return `${this.velAtual}KM/H de ${this.velMax}KM/H`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 354,

}

const volvo = {
    modelo: 'V40',
    status(){
        //super faz chamar a função do objeto herdado
        return `${this.modelo}:${super.status()}`
    }
}

//Faz a referencia ao objeto carro como prototipo
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(3000)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())
