let usuario = {
    isAdmin: false
}

let senhamestra = "admin123"

function promoverParaAdmin(usuario, senha){
    if(senha === senhamestra){
        usuario.isAdmin = true
        return alert(`Promoção concedida! Status Admin: ${usuario.isAdmin}`)
    }else{
        return alert("Senha incorreta. Acesso negado.")
    }
}

let senha = prompt("Digite a senha de administrador:")
promoverParaAdmin(usuario, senha)


