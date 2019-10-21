function soBoaNoticia(nota){
    if (nota<=7){
        console.log('Aprovado com ' + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(5) // Nao imprime nada

function seForVerdadeiroFalo(valor){
    if (valor ){
        console.log('É verdade... ' + valor)
    }
}

seForVerdadeiroFalo()
seForVerdadeiroFalo(null)
seForVerdadeiroFalo(NaN)
seForVerdadeiroFalo('')
seForVerdadeiroFalo(0)
seForVerdadeiroFalo(-1) //Primeiro que imprime a mensagem
