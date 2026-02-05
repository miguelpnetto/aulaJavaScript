let cardapio = [
    {
        codigo: 1,
        nome: "Hambúrguer",
        preco: 15.00
    },
    {
        codigo: 2,
        nome: "Batata Frita",
        preco: 8.00
    },
    {
        codigo: 3,
        nome: "Refrigerante",
        preco: 5.00
    }
]

let fecharPedido = ""
let itensPedido = []

while (!fecharPedido.toLowerCase().includes("finalizar")) {
    let codigoProduto = Number(prompt("Digite o código do produto que deseja adicionar ao pedido:\n1 - Hambúrguer\n2 - Batata Frita\n3 - Refrigerante"))
    let produtoSelecionado = cardapio.find(item => item.codigo === codigoProduto) // Encontra o produto no cardápio com base no código inserido

    if (produtoSelecionado) {
        let quantidade = Number(prompt(`Quantos ${produtoSelecionado.nome}s você deseja adicionar ao pedido?`))
        let totalProduto = produtoSelecionado.preco * quantidade
        itensPedido.push({     // Adiciona o objeto do item ao array itensPedido
            produto: produtoSelecionado,
            quantidade: quantidade,
            total: totalProduto
        })
        alert(`Você adicionou ${quantidade} ${produtoSelecionado.nome}(s) ao pedido. Total: R$ ${totalProduto.toFixed(2)}`)
    }
    fecharPedido = prompt("Deseja finalizar o pedido? Digite 'finalizar' para finalizar ou qualquer outra tecla para continuar.")
}

let valorTotalPedidoBruto = itensPedido.reduce((acumulador, item) => acumulador + item.total, 0)

let desconto10 = valorTotalPedidoBruto * 0.10
let descontto5 = valorTotalPedidoBruto * 0.05
let desconto20 = valorTotalPedidoBruto * 0.20
let desconto = Math.random() < 0.33 ? desconto10 : Math.random() < 0.5 ? descontto5 : desconto20  //
let valorTotalPedido = valorTotalPedidoBruto - desconto
alert(`Parabéns! Você recebeu um desconto de ${desconto === desconto10 ? 10 : desconto === descontto5 ? 5 : 20}%! Valor do desconto: R$ ${desconto.toFixed(2)}`)


console.log("Resumo do Pedido:\n" + itensPedido.map(item => `${item.quantidade} x ${item.produto.nome.toUpperCase()}`))
console.log("Valor Total do Pedido Bruto: R$ " + valorTotalPedidoBruto.toFixed(2))
console.log("Valor do Desconto: R$ " + desconto.toFixed(2))
console.log("Valor Total do Pedido com Desconto: R$ " + valorTotalPedido.toFixed(2))
