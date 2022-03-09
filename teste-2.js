// const clientes = [
// {
//     nome: "Anderson",
//     cpf: "12332112345",
//     dependentes: [{
//         nome: "Sakura Haruno",
//         parentesco: "filha",
//         dataNasc: "23/01/2018",
//     }],
// },
// {
//     nome: "Chico",
//     cpf: "56776878698",
//     dependentes: [{
//         nome: "Naruto Uzumaki",
//         parentesco: "filho",
//         dataNasc: "21/09/2009",
//     }],
// },
// {
//     nome: "Kakashi",
//     cpf: "09889009867",
//     dependentes: [{
//         nome: "Shikamaru Nara",
//         parentesco: "filho",
//         dataNasc: "24/10/2015",
//     }],
// }
// ]

// const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes, ...clientes[2].dependentes]

// console.table(listaDependentes)

// Prototype

// function Cliente(nome, cpf, email, saldo) {
//     this.nome = nome
//     this.cpf = cpf
//     this.email = email
//     this.saldo = saldo
//     this.depositar(valor) {
//         this.saldo += valor
//     }
// }


// const Anderson = new Cliente("Anderson", "28237346457", "and@gmail.com", 190)

// console.log(Anderson)

class Cliente {
    constructor (nome, cpf, email, saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, cpf, email, saldo, saldoPoupanca){
        super(nome, cpf, email, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
}

const andre = new ClientePoupanca ("Andre", "09109209347", "a@gmail.com", 250, 200)

console.log(andre)

andre.depositar(50)

console.log(andre)
