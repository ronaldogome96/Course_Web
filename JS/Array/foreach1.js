
const aprovados = ['Ronaldo', 'Levi', 'Joel', 'Israel']

//Foreach percorre o array
aprovados.forEach(function(nome,indice){
    console.log(`${indice+1}> ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const exibirAprovador = aprovados.forEach(nome => console.log(nome))
aprovados.forEach(exibirAprovador)
