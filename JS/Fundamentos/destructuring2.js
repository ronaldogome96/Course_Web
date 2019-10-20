
const [a] = [10] // cria a constante a com valor 10
console.log(a)

const [n1,,n3,,n5,n6=0] = [10,7,8,9]
console.log(n1,n3,n5) //n5 é undefined

const [,[,nota]] = [[,8,8],[9,6,8]] //nota é o segundo elemento do segundo array
console.log(nota)

