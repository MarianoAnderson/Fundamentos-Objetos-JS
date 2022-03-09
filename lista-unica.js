const clientes = [
   {
     nome: "Anderson",
     cpf: "98778998789",
     dependentes: [{
       nome: "Sara Silva",
       parentesco: "filha",
       dataNasc: "20/03/2018" },
   {
       nome: "Sara Siverman",
       parentesco: "filha",
       dataNasc: '26/01/2020'
   }],
 },
 {
     nome: "Juliana",
     cpf: "67887667889",
     dependentes: [{
         nome: "sophia",
         parentesco: "filha",
         dataNasc: "30/08/2020"
     }],
 },
 {
     nome: "Juca",
     cpf:"12332112334",
     dependentes: [{
         nome: "Sakura Haruno",
         parentesco: "filha",
         dataNasc: "25/09/2019",
     }],
 }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes, ...clientes[2].dependentes]

console.table(listaDependentes)