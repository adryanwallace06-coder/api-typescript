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

export default { getProduto, getAllProdutos };