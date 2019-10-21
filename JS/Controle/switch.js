const imprimirResultado = function(nota) {
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra') // Entra se for 10 ou 9
            break
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0 :
            console.log('Reprovado')
            break
        default:
            console.log("Opção invalida")
    }
}

imprimirResultado(7)
imprimirResultado(3)
imprimirResultado(10)