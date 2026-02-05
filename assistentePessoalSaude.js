let pacientes = {}
let pesoPaciente, alturaPaciente
let nomePaciente = prompt("Digite seu nome:")

do {
    pesoPaciente = Number(prompt("Digite seu peso em kg:"))
    alturaPaciente = Number(prompt("Digite sua altura em m:"))
} while (pesoPaciente <= 0 || alturaPaciente <= 0)

calcularIMC = (peso, altura) => {
    let alturaEmMetros = altura / 100  // Convertendo cm para metros
    return peso / (alturaEmMetros * alturaEmMetros)
}
let IMC = calcularIMC(pesoPaciente, alturaPaciente)  // Calculando o IMC

if (IMC < 18.5) {
    alert(`${nomePaciente}, seu IMC é ${IMC.toFixed(2)}. Abaixo do peso.`)  // toFixed(2) limita o número de casas decimais para 2.
} else if (IMC >= 18.5 && IMC <= 24.9) {
    alert(`${nomePaciente}, seu IMC é ${IMC.toFixed(2)}. Peso normal.`)
} else if (IMC >= 25 && IMC <= 29.9) {
    alert(`${nomePaciente}, seu IMC é ${IMC.toFixed(2)}. Sobrepeso.`)
} else if (IMC >= 30) {
    alert(`${nomePaciente}, seu IMC é ${IMC.toFixed(2)}. Obesidade.`)
}

pacientes[nomePaciente] = {
    peso: pesoPaciente,
    altura: alturaPaciente,
    imc: IMC.toFixed(2),
    classificacao: (IMC < 18.5) ? "Abaixo do peso" :                // Operador ternário para simplificar a atribuição da classificação / ? "condição verdadeira" : "condição falsa"
                   (IMC >= 18.5 && IMC <= 24.9) ? "Peso normal" :
                   (IMC >= 25 && IMC <= 29.9) ? "Sobrepeso" :
                   "Obesidade"
}

let verDados = prompt("Deseja ver os dados do paciente cadastrado? (s/n)").toLowerCase()
if (verDados === 's') {
    alert(`Dados do paciente:\nNome: ${nomePaciente}\nPeso: ${pacientes[nomePaciente].peso} kg\nAltura: ${pacientes[nomePaciente].altura} m\nIMC: ${pacientes[nomePaciente].imc}\nClassificação: ${pacientes[nomePaciente].classificacao}`)
}