let comentarios = [
    "Ótimo produto, muito satisfeito!",
    "Péssima qualidade, não recomendo.",
    "Entrega rápida e atendimento excelente.",
    "Produto chegou danificado, muito decepcionado.",
    "Excelente custo-benefício, superou minhas expectativas."
]

let palavrasProibidas = [
    "péssima",
    "decepcionado",
    "danificado"
]

function analisarComentarios(comentarios, ...palavrasProibidas) { // Função que analisa os comentários com base nas palavras proibidas
    let comentariosProibidos = []
    let comentariosAprovados = []
    for (let comentario of comentarios) {  // Itera sobre cada comentário
        let comentarioLower = comentario.toLowerCase();  // Converte o comentário para minúsculas para comparação
        let contemPalavraProibida = false
        
        for (let palavra of palavrasProibidas) {  // Verifica se o comentário contém alguma palavra proibida
            if (comentarioLower.includes(palavra.toLowerCase())) {
                contemPalavraProibida = true
                break;
            }
        }

        if (contemPalavraProibida) {
            comentariosProibidos.push({ comentario: comentario, status: "Reprovado", motivo: `Contém palavra proibida, ${palavrasProibidas.find(p => comentarioLower.includes(p.toLowerCase()))}` })
        } else {
            comentariosAprovados.push({ comentario: comentario, status: "Aprovado", motivo: "Nenhuma palavra proibida encontrada" })
        }
    
    }
    return { comentariosProibidos, comentariosAprovados };
}

let resultadosAnalise = analisarComentarios(comentarios, ...palavrasProibidas); // Chama a função para analisar os comentários e armazena os resultados na variável resultadosAnalise
for (let resultado of resultadosAnalise.comentariosProibidos) {  // Itera sobre os resultados e imprime o status de cada comentário proibido no console
    console.log(`Comentário: "${resultado.comentario}" - Status: ${resultado.status} - Motivo: ${resultado.motivo}`)
}
for (let resultado of resultadosAnalise.comentariosAprovados) {  // Itera sobre os resultados e imprime o status de cada comentário aprovado no console
    console.log(`Comentário: "${resultado.comentario}" - Status: ${resultado.status} - Motivo: ${resultado.motivo}`)
}

