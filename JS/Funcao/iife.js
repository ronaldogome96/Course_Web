// IIFCE --> Immediately invoked function expression
 // vai ser executada, fugindo do escorpo global
(function() {
    console.log("Sera executado na mesma hora")
    console.log('Foge do escopo mais abrangente')
}) ()
