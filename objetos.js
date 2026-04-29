/*
const aluno = {
    nome: "Romário",
    idade: "16",
    profissao: "corredor",
    gostaCoxinha: false,
    cidade: "São Leopoldo",
    hobbies: ["correr", "malhar", "ver videos do Black five stars"]
}
console.log(aluno)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Meios de acessar valores dos objetos

console.log("Nome do aluno? ", aluno.nome)

console.log("idade do aluno? ", aluno.idade)

//segundo método ============================================================================================================================================================================

console.log("Onde vive? ", aluno[cidade])

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const filme = {
    direcao: "Tim Burton",
    nome: "sweeney Todd",
    elenco: ["johnny Depp", "Helena Carter", "Alan Rickman", "Jamie Bower"],
    jaViu: true
}


console.log("Quem dirigiu? ", filme.direcao)

console.log("Qual nome do filme? ", filme.nome)

console.log("Qual o elenco? ", filme["elenco"])

console.log("Já assistiu? ", filme.jaViu)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const eu = {
    nome: "Lucas Mello",
    idade: "17",
    livros: ["senhor dos anéi                                                                                                                                                  s", "O Hobbit"],
    filmes: ["Piratas do Caribe", "Tudo em todo Lugar ao mesmo tempo", "Rango", "O conde de Monte Cristo"],
    series: ["bee e PuppyCat", "Hilda", "JoJo Bizarre Adventure", "Jujutsu Kaisen"],
    time: false,
    hobbie: ["academia", "jogar", "cozinhar", "escrever poemas"]
}

console.log(eu.nome)
console.log(eu.idade)
console.log(eu.livros)
console.log(eu.filmes)
console.log(eu.series)
console.log(eu.time)
console.log(eu.hobbie)

eu.idade = "18"

console.log(eu.idade)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let jogador = {
    nome: "Vitor Vinicius",
    pontos: 15,
    time: "Dragoes"
}

console.log("O jogador " + jogador.nome + " do time " + jogador.time + " marcou 20 pontos!")
jogador.pontos = 20
console.log(jogador.pontos)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let musica = {
    titulo: "Pintinho Amarelinho",
    artista: "Galinha Pintadinha",
    curtidas: 500
}

console.log(musica.titulo)
musica.titulo = "Brilha Brilha estrelinha"
console.log(musica.titulo)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let perfil = {
    username: "Linkzinkk",
    seguidores: 120,
    verificado: false
}

console.log(`O perfil de ${perfil.username} tem ${perfil.seguidores}, mas é verificado? ${perfil.verificado}`)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let carro = {
    marca: "mitsubishi",
    modelo: "95",
    ano: 1995,

    acelerar: function() {
        console.log(" O carro esta Acelerando")
    },

    buzinar: function() {
        console.log("bibi")
    }
}

console.log(carro.marca)
console.log(carro.acelerar)
console.log(carro.buzinar)
*/
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let celular = {
    marca: "samsung",
    modelo: "A25",
    armazenamento: "128gb",

    ligar: function() {
        console.log("Celular ligado")
    },

    foto: function() {
        console.log("Click, foto tirada!")
    }
}

console.log(celular.marca)

ligar()
foto()