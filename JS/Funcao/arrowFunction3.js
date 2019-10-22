let comparaComThis = function(param){
    console.log(this === param) // compara se o this é estritamente igual ao parametro passado
}
comparaComThis(global) // MOstra true, pois o this dentro de uma função normal é global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) // False pois nesse caso this aponta para obj, por causa do bind
comparaComThis(obj) // true

let comparaComThisArrow = param => console.log(this===param)

comparaComThisArrow(global) // False pois aponta para dentro da função arrow, para o objeto

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //false pois mesmo com o bind, a função arrow é mais forte
