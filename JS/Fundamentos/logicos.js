function compras (trabalho1 , trabalho2){
    const sorvete = trabalho1 || trabalho2 // ou
    const tv50 = trabalho1 && trabalho2 // e
    const tv30 = trabalho1 != trabalho2 // xor
    const saudavel = !sorvete // negação

    return {sorvete, tv50, tv30, saudavel} //cria uum objeto final para retornar
}
console.log(compras(true, false))
console.log(compras(true, true))
console.log(compras(false, false))
console.log(compras(false, true))

