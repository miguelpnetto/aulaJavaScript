function criarPerfilDev(){
    let nome = prompt("Digite seu nome:")
    let email = prompt("Digite seu email:")
    let idade = Number(prompt("Digite sua idade:"))

    let habilidadesArray = []

    do{
        let habilidades = prompt("Adicione uma Habilidade: (ou 'fim' para encerrar)")
        if(habilidades.toLowerCase() === 'fim'){
            break
        }else{
            habilidadesArray.push(habilidades)
        }
    }while(true)
    
    let perfil = {  // 
        nome: nome,
        email: email,
        idade: idade,
        habilidades: habilidadesArray,
        isAdmin: false   
    }
return alert(`Nome: ${perfil.nome}\nEmail: ${perfil.email}\nIdade: ${perfil.idade}\nHabilidades:\n${perfil.habilidades.join("\n")}\nAdministrador: ${perfil.isAdmin}`)
}


criarPerfilDev()