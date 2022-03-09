// const cliente = {
//     nome: "Bruce Waine",
//     idade: 38,
//     cpf: "17717717789",
//     fone: "9009090900"
// }

// // const info = ["nome", "idade", "cpf", "fone"]

// // // console.log(cliente[info[3]])

// // info.forEach(cadastro => console.log(cliente[cadastro]))

// cliente.altura = "1,85"

// console.log(cliente)

// delete cliente.cpf

// console.log(cliente)

// const fichaGuerreiro = {
//     nome: "Aragorn",
//     classe: "guerreiro"
//    }
   
//    const equipoGuerreiro = {
//     espada: "Andúril",
//     capa: "capa élfica +2"
//    }

// const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
// console.table(guerreiro)

const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
//    console.log(jsonLivro)

   const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)