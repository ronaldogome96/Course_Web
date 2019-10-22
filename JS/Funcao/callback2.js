const notas = [ 5,6,7,8,9]

// sem callback
let  notasBaixas= []
for (let i in notas) {
    if (notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

//com calback

const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

//Forma com arrow

const notasBaixas3 = notas.filter( nota => nota<7 )
console.log(notasBaixas3)
