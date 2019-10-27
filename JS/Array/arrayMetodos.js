
const pilotos = ['Vetel', 'Alonso', 'Vestapen', 'Massa']
pilotos.pop() // Exclui o ultimo elemento do array

pilotos.push('Bottas') // Adiciona 

pilotos.shift() // Remove o primeiro elemento

pilotos.unshift('Hamilton') // Adiciona o elemento a primeira posição

//splice pode adicionar e remover elementos

//Adicionar
pilotos.splice(2,0, 'Massa', 'Shume') // Adiciona a partir da posição 2

//remover
pilotos.splice(3,1) //remove um elemento depois da posição 3

const algunsPiloto1= pilotos.slice(2) // Cria um novo array com elementos a partir o indice 2

const algunsPiloto2 = pilotos.slice(2,4) // novo array com esse intervalo  dos indices

