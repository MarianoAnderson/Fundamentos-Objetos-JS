const cliente = {
    nome: "Anderson",
    idade: 24,
    cpf: "98778998789",
    email: "andersonmariano801@gmail.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

// console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))

// console.log(cliente.idade)