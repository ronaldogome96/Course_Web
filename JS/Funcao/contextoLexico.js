const valor = 'Global'

function minhaFUncao(){
    console.log(valor)
}

function exec(){
    const valor = 'local'
    minhaFUncao() // Printa global, pois carrega o valor global
}
exec()
