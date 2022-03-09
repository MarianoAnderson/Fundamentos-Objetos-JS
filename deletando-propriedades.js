const objPersonagem = {
    nome: "charmander",
    tipo: "fogo",
    nivel: "10",
    evolucao: {
        nome: "charizard",
        tipo: "fogo"
    },
    status: "desaparecido",
}

delete objPersonagem.evolucao
        //  ||
delete objPersonagem["evolucao"]

console.log(objPersonagem.evolucao)