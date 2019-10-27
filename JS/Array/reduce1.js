const notas = [7.3,9.2,8.8,8.7]
//Faz o que a função pede de forma recursiva ate achar um valor
const resultado = notas.reduce((acumulador, atual) => acumulador + atual , 10)
console.log(resultado)
