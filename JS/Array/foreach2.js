// Implementando o propio foreach
Array.prototype.forEach2 = function(calback) {
    for (let i=0; i < this.length; i++) {
        calback(this[i], i, this)
    }
}

const aprovados = ['Ronaldo', 'Levi', 'Joel', 'Israel']

//Foreach percorre o array
aprovados.forEach2(function(nome,indice){
    console.log(`${indice+1}> ${nome}`)
})

