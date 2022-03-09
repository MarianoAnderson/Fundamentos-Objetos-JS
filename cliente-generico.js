function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

const anderson = new Cliente("Anderson", "76556776578", "andersonmariano801@gmail.com", 100)

console.log(anderson)