const ferrari ={
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}
 //Todo objeto em JS tem uma referencia a cima, chamada __proto__
console.log(ferrari.__proto__)
console.log(ferrari.__proto__ === Object.prototype) 
console.log(volvo.__proto__ === Object.prototype)
