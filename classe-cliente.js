class Cliente {
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const anderson = new Cliente("Anderson", "and@gmail.com", "19991119990", 150)

anderson.exibirSaldo()
anderson.depositar(50)
console.log(anderson)

// function imprimeNomeEmail(tipoCliente){
//     console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
//    }
   
//    const cliente1 = {
//     nome: "Carlos",
//     email: "c@email.com"
//    }
   
//    const cliente2 = {
//     nome: "Fred",
//     email: "f@email.com"
//    }

// imprimeNomeEmail.call(cliente1, "cliente especial")

// imprimeNomeEmail.call(cliente2, "cliente estudante")

// const personagem = {
//     nome: "Princesa Leia",
//     apresentar: function(){
//       return `a personagem é ${this.nome}`
//     }
//    }
//    const personagemGenerico = personagem.apresentar
// console.log(personagemGenerico())

//    const personagemDefinido = personagemGenerico.bind(personagem)
   
//    console.log(personagemDefinido())

