let alunos = [
    {nome: "Ana", notaFinal: 8.5, notas: [8, 7.5, 9]},    
    {nome: "Bruno", notaFinal: 6.0, notas: [6, 5.5, 7]},
    {nome: "Carla", notaFinal: 9.0, notas: [9, 8.5, 10]},
    {nome: "Daniel", notaFinal: 5.0, notas: [4, 6, 5.5]}
]

let alunosAprovados = []

for (let i = 0; i < alunos.length; i++) {  // Percorre o array de alunos 
    if (alunos[i].notaFinal >= 7) {  // Verifica se a nota final do aluno é maior ou igual a 7
        alunosAprovados.push(alunos[i].nome, alunos[i].notaFinal)  // Adiciona o nome e a nota final do aluno aprovado ao array alunosAprovados
        alunosAprovados.sort((a, b) => a - b)  // Ordena o array de alunos aprovados em ordem crescente de nota final
    }
}

alert(`PARTE 1 - Lista de Objetos Ordenados:\n\n${alunosAprovados}`) 

let listaFormatada = []

for (let i = 0; i < alunosAprovados.length; i += 2) {  // Percorre o array de alunos aprovados, incrementando de 2 em 2
    listaFormatada.push(`${i/2 + 1}. ${alunosAprovados[i].toUpperCase()} (${alunosAprovados[i + 1]})`)  // Formata a lista de alunos aprovados com numeração, nome em maiúsculas e nota final
}

alert(`PARTE 2 - Lista de Strings formatadas:\n\n${listaFormatada.join('\n')}`)

let pesquisaAluno = prompt("Digite o nome do aluno que deseja pesquisar:")  // Solicita ao usuário o nome do aluno a ser pesquisado e converte para maiúsculas

for (let i = 0; i < alunos.length; i++) {  // Percorre o array de alunos
    if (alunos[i].nome.toUpperCase() === pesquisaAluno.toUpperCase()) {  // Compara o nome do aluno com o nome pesquisado, ignorando maiúsculas/minúsculas
        console.log(`PARTE 3 - Ferramenta de Busca:\n\nNome: ${alunos[i].nome}\nNotas: ${alunos[i].notas.join(", ")}\nMédia Final: ${alunos[i].notaFinal}`)
        break
    }else if (i === alunos.length - 1) {  // Verifica se chegou ao final do array sem encontrar o aluno
        console.log(`${pesquisaAluno} não encontrado(a) na turma.`)  // Exibe uma mensagem caso o aluno não seja encontrado
    }
}

