function Carro(velocidadeMaxima = 200 , delta = 5){
    //Atributo privado
    let velocidadeAtual = 0

    //Metodo publico
    this.acelerar = function () {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }
        else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    // metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

const uno = new Carro // Instancia carro em um novo objeto
uno.acelerar() // Usa o metodo acelerar
console.log(uno.getVelocidadeAtual()) // usa o outro metodo

const ferrari =  new Carro(350,20) // Construtor
ferrari.acelerar() // Usa o metodo acelerar
console.log(ferrari.getVelocidadeAtual()) // usa o outro metodo