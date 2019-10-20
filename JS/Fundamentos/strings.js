
const escola = "Cod3r"

console.log(escola.charAt(4)) //charAt(4) Mostra o caractere que esta nessa posição 4
console.log(escola.charAt(5)) //Mostra nada
console.log(escola.charCodeAt(3)) //Mostra o numero na tabela assci
console.log(escola.indexOf('o')) //Mostra a posição do caractere na variavel

console.log(escola.substring(1)) //Mostra a palavra a partir do indice indicado
console.log(escola.substring(0,3))
console.log('Escola '.concat(escola).concat("!!")) //Concatena tudo
console.log('Escola ' + escola + "!!") //Outra forma
// concat() concatena algo a string

console.log(escola.replace(3,'e')) //Substitui o terceiro caractere por 'e'
console.log('Ana, Maria,Pedro'.split(',')) //Tranforma em array

