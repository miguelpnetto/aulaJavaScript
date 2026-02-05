let alunos = [
    {nome: "Ana", notaFinal: 8.5, notas: [8, 7.5, 9]},    
    {nome: "Bruno", notaFinal: 6.0, notas: [6, 5.5, 7]},
    {nome: "Carla", notaFinal: 9.0, notas: [9, 8.5, 10]},
    {nome: "Daniel", notaFinal: 5.0, notas: [4, 6, 5.5]}
]

let somaNotas = 0
let maiorNota = {nome: "", notaFinal: 0}
let menorNota = {nome: "", notaFinal: 10}

for (let i = 0; i < alunos.length; i++) {
    somaNotas += alunos[i].notaFinal  // Soma todas as notas do aluno / reduce = função que reduz o array a um único valor

    if (alunos[i].notaFinal > maiorNota.notaFinal) {
        maiorNota = {nome: alunos[i].nome, notaFinal: alunos[i].notaFinal}
    }
    if (alunos[i].notaFinal < menorNota.notaFinal) {
        menorNota = {nome: alunos[i].nome, notaFinal: alunos[i].notaFinal}
    }

}

let mediaTurma = somaNotas / alunos.length

let relatorioFinal = {
    mediaTurma: mediaTurma,
    melhorAluno: maiorNota.nome,
    piorAluno: menorNota.nome
}

alert(`Relatório de Desempenho da Turma:\n
Média da Turma: ${relatorioFinal.mediaTurma.toFixed(2)}\n
Melhor Aluno: ${relatorioFinal.melhorAluno}\n
Pior Aluno: ${relatorioFinal.piorAluno}`)