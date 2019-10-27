
const sequencia = {
    _valor: 1, //convencao para mostra que a variavel é privada
    //Retorna o valor
    get valor(){return this._valor++ },
    //Recebe o valor
    set valor(valor) {
        if (valor > this._valor){
            this._valor = valor
        }
    }
}

//Nao precisa chamar o set ou o get, pois o JS ja reconhece
// JS nao aceita sobrecarga de metodos
console.log(sequencia.valor,sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
