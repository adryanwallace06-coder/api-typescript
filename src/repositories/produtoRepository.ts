import Produto from "../models/produto.js";

const produtos: Produto[] = [];
// simulação de BD que inicia com array vazio

async function getProduto(id: number): Promise<Produto | undefined> {
    return new Promise((resolve, reject) => {
        // SELCT no SQL
        return resolve(produtos.find((p) => p.id === id));
    });
}

async function getAllProdutos(): Promise<Produto[]> {
    return new Promise((resolve, reject) => {
        return resolve(produtos);
    });
}

async function addProduto(produto: Produto): Promise<Produto> {
    return new Promise((resolve, reject) => {
        if (!produto.nome || !produto.preco) {
            return reject(new Error("Dados do produto inválidos"));
        }

        const novoProduto = new Produto(produto.id, produto.nome, produto.preco, produto.descricao, produto.promo);
        produtos.push(novoProduto);
        return resolve(novoProduto);
    });
}

export default { getProduto, getAllProdutos, addProduto };