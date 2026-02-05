let numeroSecreto = Math.floor(Math.random() * 20) + 1  // Número aleatório entre 1 e 20, explicando melhor: Math.floor arredonda para baixo, então obtemos um número inteiro entre 0 e 19. Adicionando 1, temos um número entre 1 e 20 (inclusivo).
let acertou = false

while (!acertou) {
    let palpite = Number(prompt("Adivinhe o número secreto (entre 1 e 20):"))
    if (palpite === numeroSecreto) {
        alert(`Parabéns! Você acertou o número secreto ${numeroSecreto}!`)
        acertou = true
    } else if (palpite < numeroSecreto) {
        alert("Tente um número maior.")
    } else {
        alert("Tente um número menor.")
    }
}