let listaVIP = ['Maria', 'João', 'Ana', 'Pedro', 'Carla']
let pistaComum = "PISTA123"
let sair = false

while (!sair) {
    let nome = prompt("Digite seu nome:")
    let idade = Number(prompt("Digite sua idade:"))

    if (idade < 18) {
        alert(`Acesso negado, ${nome}. Evento restrito apenas para maiores de 18 anos.`)
        sair = true
    } else if (listaVIP.includes(nome)) {
        alert(`Bem-vindo(a) à Área VIP, ${nome}!`)
        sair = true
    } else {
        let codigoAcesso = prompt(`Olá, ${nome}. Seu nome não está na lista VIP. Para acessar a pista comum, insira o codigo de acesso:`)
        let tentativas = 0

        do {
            if (codigoAcesso === pistaComum) {
                alert(`Código correto! Bem-vindo(a) à Pista Comum ${nome}!`)
                sair = true
            } else {
                tentativas++
                if (tentativas < 3) {
                    codigoAcesso = prompt(`Código incorreto. Você tem mais ${3 - tentativas} tentativa(s). Insira o código de acesso novamente:`)
                } else {
                    alert("Você excedeu o número máximo de tentativas. Acesso negado.")
                    sair = true
                }
            }
        } while (codigoAcesso !== pistaComum && tentativas < 3)
    }
}