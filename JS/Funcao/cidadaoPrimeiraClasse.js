// criar uma função de forma literal
// Bloco é obrigatorio em funções
function fun1() {}

//Função pode ser armazenada em uma variavel
const fun2 = function() {}

// Armazenando função em um array
const array = [function (a , b) { return a+b}, fun1, fun2]
console.log(array[0](2,3)) // Chamou a primeira função e passou parametros

// Armazenando em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}  // Cria uma instancia do objeto (falar) e passa uma função como atributo
console.log(obj.falar()) // Retorna a mensagem do objeto

// Passar função como parametro
function run(fun){
    fun()
}
run(function () { console.log("Executando ......")})

// Função pode retornar ou conter uma função
function soma(a ,b){
    return function (c) {
        console.log(a+b+c)
    }
}
soma(2,3)(4) // Primeira forma
const mais = soma(4,5) // Outra
mais(4) //Forma
