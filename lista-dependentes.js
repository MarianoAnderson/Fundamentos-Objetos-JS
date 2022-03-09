const cliente = {
    nome: "Anderson",
    idade: 24,
    cpf: "98778998789",
    email: "andersonmariano801@gmail.com",
    fones: ["88999988998", "88997799779"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2018"
    }]
}

cliente.dependentes.push({
    nome: "Sara Siverman",
    parentesco: "filha",
    dataNasc: '26/01/2020'
})

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter (dependente => dependente.dataNasc === "26/01/2020")
console.log(filhaMaisNova[0].nome)
