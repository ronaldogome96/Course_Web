var numero = 1 // global
{
    let numero = 2 // Let é local, os escorpos importa, bloco importa
    console.log("Dentro =", numero)
}
console.log("Fora = ", numero)
