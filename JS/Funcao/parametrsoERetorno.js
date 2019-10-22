function area (largura , altura){
    const area = largura*altura
    if (area > 20){
        console.log('Valor acima do esperado ', area) // Pode retornar uma mensagem
    }
    else {
        return area // Pode retornar um resultado
    }
}

console.log(area(2,2))
console.log(area(74,28))
