let pessoas = []
let sair = false

while (sair) {
    let nome = prompt("Informe seu nome: ")
    if (nome.toLowerCase !== "sair") {
        pessoas.push(nome)
    } else {
        alert(`Pessoas cadastradas:\n${pessoas}`)
        sair = true
    }
}

