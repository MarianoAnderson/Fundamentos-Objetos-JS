const cliente = {
    nome: "Anderson",
    idade: 24,
    cpf: "98778998789",
    email: "andersonmariano801@gmail.com"
}

console.log(`Tenho ${cliente.idade} e meu nome é ${cliente.nome}.`)
         // começa do 0 e vai até um indice antes do citado(nesse caso o três)
console.log(cliente.cpf.substring(0,3))