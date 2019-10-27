//Como string é um objeto, adiciona uma nova função a ela
String.prototype.reverse = function () {
    return this.split('').reverse().join("")
}
console.log("Escola cod3r".reverse())

//Faz uma nova função direto no prototipo da função array
Array.prototype.first = function () {
    return this[0]
}

console.log([1,2,3,4,5,6].first())
console.log(['a','b','c'].first())
