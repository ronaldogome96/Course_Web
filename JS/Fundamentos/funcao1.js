// função sem retorno
//function é a palavra reservada para função
function imprimirSOma(a, b) {
    console.log(a+b)
}

imprimirSOma(2,5)
imprimirSOma(2) // printa NaN
imprimirSOma(2,101,15,187,2) //Pega somente o 2 e 101
imprimirSOma() //NaN

//função com retorno
function soma(a, b=0 ){
    return a+b
}

console.log(soma(1.3)) //Imprime duas vezes 
console.log(soma(2))

