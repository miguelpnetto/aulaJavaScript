// Informar se a palavra digitada é um palindromo
let saida = false

while (!saida) {
    let palavra = prompt("Digite uma palavra: ")
    let palavraInvertida = palavra.split('').reverse().join('')  //split('') divide a palavra em um array de caracteres, reverse() inverte a ordem dos caracteres no array, join('') junta os caracteres de volta em uma string.

    if (palavra === palavraInvertida) {
        alert(`A palavra "${palavra}" é um palíndromo.`)
    } else {
        alert(`A palavra "${palavra}" não é um palíndromo.`)
    }

    let continuar = prompt("Deseja verificar outra palavra? (s/n)").toLowerCase()
    if (continuar !== 's') {
        saida = true
    }
}