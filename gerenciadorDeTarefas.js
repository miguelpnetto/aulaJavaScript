let tarefas = []
let condicao = false

while (!condicao) {
    let novaTarefa = prompt("Digite uma nova tarefa: (ou 'parar' para sair)").toLowerCase()
    
    if (novaTarefa === 'parar') {
        condicao = true
    } else {
        tarefas.push({descricao: novaTarefa, concluida: false})
    }
}

alert(`Voce tem ${tarefas.length} tarefas pendentes.\nLista de tarefas:\n${tarefas.map(tarefa => tarefa.descricao).join('\n')}`)