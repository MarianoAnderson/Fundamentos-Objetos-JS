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


function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }

}

console.log(Object.entries(cliente))
console.log(Object.values(cliente))
oferecerSeguro(cliente)