// Callback é chamar uma função a cada ciclo de repetição
const fabricantes = ['Mercedes', 'Audi', 'BMW', 'Ferrari']

function imprimir (nome, indice) {
    console.log(`${indice+1}, ${nome}`)
}

fabricantes.forEach(imprimir) //para cada atributo do array ele chama a função imprimir
fabricantes.forEach(function(a){
    console.log(a) // cada atributo do array
})
fabricantes.forEach(a => console.log(a))
