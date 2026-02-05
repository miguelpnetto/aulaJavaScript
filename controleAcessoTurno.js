let funcionarios = {
    "001": { nome: "Ana", turno: "manhã", ativo: true },
    "002": { nome: "Bruno", turno: "tarde", ativo: false },
    "003": { nome: "Carla", turno: "noite", ativo: true },
    "004": { nome: "Daniel", turno: "manhã", ativo: false },
    "005": { nome: "Eduardo", turno: "tarde", ativo: true }
}

function verificarAcesso(funcionario, horarioAtual) {
    horarioAtual = Math.floor(Math.random() * 24)  // Simula a hora atual entre 0 e 23
    console.log(`Hora simulada para verificação: ${horarioAtual}`)
    if (horarioAtual >= 6 && horarioAtual < 12) {
        horarioAtual = "manhã"
    } else if (horarioAtual >= 12 && horarioAtual < 18) {
        horarioAtual = "tarde"
    } else if (horarioAtual >= 18 || horarioAtual < 6) {
        horarioAtual = "noite"
    }

    // Lista de funcionários com acesso permitido
    for (let i = 0; i < Object.keys(funcionarios).length; i++) {
        let id = Object.keys(funcionarios)[i]
        funcionario = funcionarios[id]
        if (funcionario.ativo && funcionario.turno === horarioAtual) {  
            console.log(`Acesso permitido para ${funcionario.nome} no turno da ${horarioAtual}.`)
        }
    }

    console.log("Funcionários com acesso negado:")  // Lista de funcionários sem acesso
    for (let i = 0; i < Object.keys(funcionarios).length; i++) {
        let id = Object.keys(funcionarios)[i]
        funcionario = funcionarios[id]
        if (!funcionario.ativo || funcionario.turno !== horarioAtual) {
            console.log(`${funcionario.nome} - Turno: ${funcionario.turno}`)
        }
    }

    console.log("Total de Cada Grupo:")  // Contagem de funcionários por turno
    let totalManha = 0, totalTarde = 0, totalNoite = 0
    for (let i = 0; i < Object.keys(funcionarios).length; i++) {
        let id = Object.keys(funcionarios)[i]
        funcionario = funcionarios[id]
        if (funcionario.turno === "manhã") {
            totalManha++
        } else if (funcionario.turno === "tarde") {
            totalTarde++
        } else if (funcionario.turno === "noite") {
            totalNoite++
        }
    }
    console.log(`Manhã: ${totalManha}, Tarde: ${totalTarde}, Noite: ${totalNoite}`)
}

console.log("Iniciando verificação de acesso dos funcionários...")
verificarAcesso(funcionarios)
console.log("Verificação de acesso concluída.")