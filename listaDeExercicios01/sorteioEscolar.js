let alunos = [
    "Ana",
    "Bruno",
    "Carla",
    "Daniel",
    "Eduarda",
    "Felipe",
    "Gabriela",
    "Hugo",
    "Isabela",
    "João"
]

let totalAlunos = alunos.length  // obtém o total de alunos na lista

let alunoSorteado = Number(prompt("Quantos alunos deseja sortear: "))  // solicita a quantidade de alunos a serem sorteados
const sortearAlunos = (lista, quantidade) => {  // funcao para sortear alunos da lista dada uma quantidade
    let sorteados = []
    let totalSorteados = 0

    for (let i = 0; i < quantidade; i++) {
        let indiceSorteado = Math.floor(Math.random() * lista.length)  // sorteia um indice aleatorio da lista
        sorteados.push(lista[indiceSorteado])  // adiciona o aluno sorteado na lista de sorteados
        lista.splice(indiceSorteado, 1)  // remove o aluno sorteado da lista original para evitar repeticao
        totalSorteados = i + 1
    }
    return sorteados
}

console.log(`Total de alunos disponíveis: ${totalAlunos}`)  // exibe o total de alunos disponiveis
console.log(`Quantidade de alunos sorteados: ${alunoSorteado}`)  // exibe a quantidade de alunos a serem sorteados
console.log(`Alunos sorteados: ${sortearAlunos(alunos, alunoSorteado).join(", ").toUpperCase()}`)  // exibe os alunos sorteados no console