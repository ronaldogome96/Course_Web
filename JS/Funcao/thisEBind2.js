function pesssoa (){
    this.idade = 0
    const self = this // prende o this inicial, da referencia inicial
    setInterval(function(){
        self.idade++
        console.log(self.idade) // printa a idade a cada segundo
    }/*.bind(this)*/, 1000)
}

new pesssoa
