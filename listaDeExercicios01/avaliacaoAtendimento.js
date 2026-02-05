let sair = false
let armazenarNotas = []


while (!sair) {
    let notasAtendiento = prompt("Por favor, insira a nota do atendimento (0 a 10):")
    let notas = Number(notasAtendiento)

    if (notasAtendiento === 'sair') {
        sair = true
        console.log("Encerrando a avaliação de atendimento.")
    } else if (notas >= 0 && notas <= 10) {
        armazenarNotas.push(notas)
    } else {
        alert("Nota inválida. Por favor, digite uma nota entre 0 e 10.")
    }

}

console.log("Notas de atendimento registradas:", armazenarNotas)

const calcularMedia = () => {  // Função para calcular a média das notas
    const soma = armazenarNotas.reduce((acumulador, nota) => acumulador + nota, 0)  // Soma todas as notas
    return (soma / armazenarNotas.length).toFixed(2)
}

const menorNota = () => { // Função para encontrar a menor nota
    return Math.min(...armazenarNotas)
}
const maiorNota = () => {  // Função para encontrar a maior nota
    return Math.max(...armazenarNotas)
}

const satisfacaoMedia = () => {  // Função para calcular a porcentagem de notas 8 ou superiores  
    if (calcularMedia() >= 8){
        return "Atendimento Excelente!"
    } else if (calcularMedia() >= 6){
        return "Atendimento Bom!" 
    } else {
        return "Precisa Melhorar!"
    }
}

console.log("Média das notas:", calcularMedia())
console.log("Menor nota:", menorNota())
console.log("Maior nota:", maiorNota())
console.log(satisfacaoMedia())