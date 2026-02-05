let produtos = [1, "Celular", 1500.00, "Eletrônicos",
                2, "Notebook", 3500.00, "Eletrônicos",
                3, "Camiseta", 50.00, "Roupas",
                4, "Calça Jeans", 120.00, "Roupas",
                5, "Fone de Ouvido", 200.00, "Eletrônicos",
                6, "Tênis", 300.00, "Calçados"
]

let somaPreco = 0
let somaEletronicos = 0
for (let i = 0; i < produtos.length; i++) {  // Percorre o array de produtos, pulando de 4 em 4 (cada produto tem 4 elementos)
    if (i % 4 === 2) {  // Verifica se o índice é o de um preço (índice 2, 6, 10, etc.)
        somaPreco += produtos[i]  // Soma o preço do produto
    }
    if (i % 4 === 3 && produtos[i] === "Eletrônicos") {  // Verifica se o índice é o de uma categoria "Eletrônicos" (índice 3, 7, 11, etc.)
        somaEletronicos += produtos[i - 1]  // Soma o preço do produto anterior (índice 2, 6, 10, etc.)
    }
}

console.log(`Soma total dos preços dos produtos: R$ ${somaPreco.toFixed(2)}`)  // Exibe a soma total dos preços formatada com 2 casas decimais
console.log(`Soma total dos preços dos produtos da categoria "Eletrônicos": R$ ${somaEletronicos.toFixed(2)}`)  // Exibe a soma total dos preços da categoria "Eletrônicos" formatada com 2 casas decimais

let inventarioPorCategoria = {}

let categoria = ""

for (let i = 0; i < produtos.length; i += 4) {  // Percorre o array de produtos, pulando de 4 em 4 (cada produto tem 4 elementos)
    categoria = produtos[i + 3]  // Obtém a categoria do produto (índice 3, 7, 11, etc.)
    if (!inventarioPorCategoria[categoria]) { // Verifica se a categoria já existe no inventário
        inventarioPorCategoria[categoria] = []  // Inicializa o array da categoria se não existir
    }
    inventarioPorCategoria[categoria].push({ // Adiciona o produto ao array da categoria
        ID: produtos[i],
        Nome: produtos[i + 1], 
        Preço: produtos[i + 2]
    }) 
}

console.log(inventarioPorCategoria)  // Exibe o inventário organizado por categoria