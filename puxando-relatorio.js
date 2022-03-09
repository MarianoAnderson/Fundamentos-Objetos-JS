const cliente = {
    nome: "Anderson",
    idade: 24,
    cpf: "98778998789",
    email: "andersonmariano801@gmail.com",
    fones: ["88999988998", "88997799779"],
    dependentes: [
     {
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2018" },
     {
        nome: "Sara Siverman",
        parentesco: "filha",
        dataNasc: '26/01/2020'
     }
   ],
   saldo:100,
   depositar:function(valor)
   {
       this.saldo += valor
   }
}

let relatorio = "";

for (let info in cliente) {
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function")
    {
        continue
    }else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
    
}

console.log(relatorio)