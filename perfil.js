const nome = "Joana"
const anoNascimento = 2001
const anoAtual = new Date().getFullYear()
const idade = anoAtual - anoNascimento
let maioridade = ""

if (idade >= 18) {
  maioridade = "Sou maior de idade."
} else {
  maioridade = "Sou menor de idade."
}

function apresentarPerfil() {
  console.log(`Olá, sou a ${nome}.`)
  console.log(`Tenho ${idade} anos.`)
  console.log(maioridade)
}

apresentarPerfil()
