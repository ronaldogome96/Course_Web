function pessoa(){
    this.idade = 0
    setInterval(() => {
        this.idade++ // Usando a função arrow nao ocorre o problema do this variando
        console.log(this.idade) // Na função arrwo o this fica preso ao corpo de função que ele esta
    },1000)
}
new pessoa