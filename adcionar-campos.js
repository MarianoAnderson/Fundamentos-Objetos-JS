const cliente = JSON.stringify({
    nome: "Anderson",
    idade: 24,
    cpf: "98778998789",
    email: "andersonmariano801@gmail.com"
})

console.log(cliente)

const objCliente = JSON.parse(cliente)
console.log(objCliente)

// cliente.fone = "9998999999"

// console.log(cliente)